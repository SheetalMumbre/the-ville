import axios from 'axios';
import { API_ADDRESS } from "./constants";
import * as cache from "./cache";
import FileSaver from "file-saver";
import { reloadPage } from "./location";
import { RequestError } from "./request-error";
import { applicationResources } from "../components/application/logic/application.const";

let appVersion = "";
let newerVersionAvailable = false;
const callCountDictionary = {};

const apiClient = axios.create({
    baseURL: API_ADDRESS,
    //timeout: 50000,
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const setAppVersionHeader = (version) => {
    appVersion = version;
};

export const isNewerVersionAvailable = () => newerVersionAvailable;

const handleValidationError = (response) => {
    if (!response.error) {
        throw new RequestError(applicationResources.http.notValid, response);
    }

    const message = response.error.message;
    const data = response.error.metadata;
    throw new RequestError(message, data);
};

const callApi = (path, method, data, headers = {}, disableCacheHeaders, contextKey) => {
    debugger;
    const cacheHeaders = !disableCacheHeaders
        ? {
            "Pragma": "no-cache",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Expires": "0"
        }
        : {};

    const config = {
        url: path,
        method,
        headers: {
            ...headers,
            ...cacheHeaders,
            'Content-Type': 'application/json'
        }
    };

    if (data) {
        if (data instanceof FormData) {
            config.data = data;
        } else {
            config.data = JSON.stringify(data);
        }
    }

    const raceConditionContextKey = contextKey && `${contextKey}-${path}`;
    const requestNumberAtCallTime = raceConditionContextKey && (callCountDictionary[raceConditionContextKey] || 0) + 1;

    if (raceConditionContextKey) {
        callCountDictionary[raceConditionContextKey] = requestNumberAtCallTime;
    }

    return apiClient(config)
        .then(response => {
            debugger;
            if (raceConditionContextKey) {
                const highestRequestNumber = callCountDictionary[raceConditionContextKey];

                if (requestNumberAtCallTime < highestRequestNumber) {
                    throw new Error(applicationResources.http.responseNotFromMostRecentRequest);
                }
            }

            if (response.status === 204) {
                return;
            } else if (response.headers['content-type'] === 'application/octet-stream') {
                return response.data;
            } else {
                return response.data.value;
            }
        })
        .catch(error => {
            debugger;

            if (error.response && error.response.status === 0 && error.response.type === 'opaqueredirect') {
                throw new RequestError(applicationResources.http.redirected);
            } else if (error.response && error.response.status === 401) {
                reloadPage();
                throw new RequestError(applicationResources.http.notAuthenticated);
            } else if (error.response && error.response.status === 403) {
                throw new RequestError(applicationResources.http.unauthorized);
            } else if (error.response && error.response.status === 429) {
                throw new RequestError(applicationResources.http.tooManyRequests, { retryAfter: error.response.headers['retry-after'] });
            } else if (error.response && error.response.status === 413) {
                throw new RequestError(applicationResources.http.payloadTooLarge);
            } else if (error.response && error.response.status === 400) {
                return handleValidationError(error.response.data);
            } else {
                if (error.response && error.response.data && error.response.data.error && error.response.data.error.stackTrace) {
                    console.error(`RequestError on ${path}. See below exception`);
                    console.error(error.response.data.error.stackTrace)
                }
                if (error.response && error.response.data && error.response.data.error && error.response.data.error.operationId) {
                    console.error(`RequestError on ${path}. OperationId ${error.response.data.error.operationId}`);
                }
                throw new RequestError(error.response.data.error.message, null, error.response.data.error.operationId);
            }
        });
};

export const get = (path, disableCacheHeaders) => {
    debugger;

    let headers = {
        "App-Version": appVersion
    };
    return callApi(path, "GET", null, headers, disableCacheHeaders);
}

export const post = (path, data, disableCacheHeaders, contextKey) => {
    debugger;
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "App-Version": appVersion
    };

    return callApi(path, "POST", data || {}, headers, disableCacheHeaders, contextKey);
}
