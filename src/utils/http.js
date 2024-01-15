import * as cache from "./cache";
import FileSaver from "file-saver";
import { reloadPage } from "./location";
import { RequestError } from "./request-error";
import { applicationResources } from "../components/application/logic/application.const";

let appVersion = "";
let newerVersionAvailable = false;
const callCountDictionary = {};

export const setAppVersionHeader = (version) => {
    appVersion = version;
};

export const isNewerVersionAvailable = () => newerVersionAvailable;

export const post = (path, data, disableCacheHeaders, contextKey) => {
       const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "App-Version": appVersion
    };
    return callApi(path, "POST", data || {}, headers, disableCacheHeaders, contextKey);
}

export const get = (path, disableCacheHeaders) => {
    let headers = {
        "App-Version": appVersion
    };
    return callApi(path, "GET", null, headers, disableCacheHeaders);
}

export const cachedPost = ({ path, request, dependencies, disableCacheHeaders }) => {
    return cache.retrieve({
        key: path,
        setter: () => post(path, request, disableCacheHeaders),
        dependencies: dependencies
    });
};

export const cachedGet = ({ path, dependencies, disableCacheHeaders }) => {
    return cache.retrieve({
        key: path,
        setter: () => get(path, disableCacheHeaders),
        dependencies: dependencies
    });
};

export const saveContentAsFile = ({ fileName, mimeType, content }) => {
    var binaryString = window.atob(content);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    var blob = new Blob([bytes], {
        type: mimeType
    });

    FileSaver.saveAs(blob, fileName);
};

export const saveFile = ({ fileName, mimeType, blobName, blobLocation }) => {
    post("/api/documents/getByBlobName", { blobName: blobName, blobLocation: blobLocation })
        .then(bytes => {
            var blob = new Blob([bytes], {
                type: mimeType
            });
            FileSaver.saveAs(blob, fileName);
        });
};

const downloadBlob = ({ url, data, callback }) => {

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(async response => {
                if (response.ok) {
                    const fileName = response.headers.get("content-disposition").split('filename=')[1].split(';')[0].replaceAll("\"", "");
                    const b = await response.blob();
                    const blob = new Blob([b], { type: b.type });
                    // MS Edge and IE don't allow using a blob object directly as link href, instead it is necessary to use msSaveOrOpenBlob
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(blob);
                        return;
                    }

                    // For other browsers: create a link pointing to the ObjectURL containing the blob.
                    const objUrl = window.URL.createObjectURL(blob);

                    callback({ objUrl, fileName });
                    resolve();
                } else if (response.status === 400) {
                    response.json()
                        .then(data => handleValidationError(data))
                        .catch(e => reject(e));
                } else {
                    return response.json()
                        .then(data => {
                            reject(new RequestError(data.error.message, null, data.error.operationId));
                        })
                        .catch(e => {
                            reject(e)
                        });
                }
            })
    });
};

export const downloadFile = async ({ url, data }) => {
    const callback = ({ fileName, objUrl }) => {
        let link = document.createElement('a');
        link.href = objUrl;
        link.download = fileName;
        link.click();

        // For Firefox it is necessary to delay revoking the ObjectURL.
        setTimeout(() => {
            window.URL.revokeObjectURL(objUrl);
        }, 250);
    };

    await downloadBlob({
        url,
        data,
        callback
    });
};

const openBlobUrlPreview = (blobObjUrl) => {
    const w = window.open(blobObjUrl);
    // For Firefox it is necessary to delay revoking the ObjectURL.
    // Additionally  to be able to download the file, you need to not revoke it until its closed
    w.addEventListener('beforeunload', () => {
        URL.revokeObjectURL(blobObjUrl);
    });
    return w;
}

export const previewContentAsFile = ({ mimeType, content }) => {
    const binaryString = window.atob(content);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], {
        type: mimeType
    });

    const objUrl = URL.createObjectURL(blob);
    openBlobUrlPreview(objUrl);
};

export const previewFile = ({ mimeType, blobName, blobLocation }) => {
    post("/api/documents/getByBlobName", { blobName: blobName, blobLocation: blobLocation })
        .then(bytes => {
            const blob = new Blob([bytes], {
                type: mimeType
            });
            const objUrl = URL.createObjectURL(blob);
            openBlobUrlPreview(objUrl);
        });
};

export const printFile = async ({ url, data, openPrintDialog = true }) => {
    const callback = ({ objUrl }) => {
        let w = openBlobUrlPreview(objUrl);
        // For safari it is necessary to use onload event, otherwise the browser does nothing
        // Disable automated printing for safari browsers until they got it fixed (most probably in v.15)
        if (openPrintDialog && !isSafari()) {
            setTimeout(() => {
                w.print();
            }, 250);
        }
    };

    await downloadBlob({
        url,
        data,
        callback
    });
};

const isSafari = () => {
    return navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('Safari/') > -1 &&
        (navigator.userAgent.indexOf('Chrome/') == -1 || navigator.userAgent.indexOf('Chromium/') == -1);
}

const handleValidationError = (response) => {
    if (!response.error) {
        throw new RequestError(applicationResources.http.notValid, response);
    }

    const message = response.error.message;
    const data = response.error.metadata;
    throw new RequestError(message, data);
};

const callApi = (path, method, data, headers = {}, disableCacheHeaders, contextKey) => {
    //debugger;

    const cacheHeaders = !disableCacheHeaders
        ? {
            "Pragma": "no-cache",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Expires": "0"
        }
        : {};

    return new Promise((resolve, reject) => {
        let init = {
            method,
            redirect: "manual",
            credentials: 'same-origin',
            headers: new Headers({
                ...headers,
                ...cacheHeaders
            })
        };

        if (data) {
            if (data instanceof FormData) {
                init.body = data;
            } else {
                init.body = JSON.stringify(data);
            }
        }

        const raceConditionContextKey = contextKey && `${contextKey}-${path}`;

        const requestNumberAtCallTime = raceConditionContextKey && (callCountDictionary[raceConditionContextKey] || 0) + 1;

        if (raceConditionContextKey) {
            callCountDictionary[raceConditionContextKey] = requestNumberAtCallTime;
        }

     
        fetch(path, init)
            .then(response => {
                if (raceConditionContextKey) {
                    const highestRequestNumber = callCountDictionary[raceConditionContextKey];

                    if (requestNumberAtCallTime < highestRequestNumber) {
                        reject(new Error(applicationResources.http.responseNotFromMostRecentRequest));
                    }
                }

                if (response.ok) {
                    debugger;

                    const responseAppVersion = response.headers.get("app-version");
                    newerVersionAvailable = appVersion && responseAppVersion && responseAppVersion !== appVersion;
                    if (response.status === 204) {
                        resolve();
                    } else if (response.headers.get("content-type") === "application/octet-stream") {
                        resolve(response.blob());
                    } else {
                        resolve(response.json().then(res => res.value));
                    }
                } else if (response.status === 0 && response.type === "opaqueredirect") {
                    reject(new RequestError(applicationResources.http.redirected));
                } else if (response.status === 401) {
                    reloadPage();
                    reject(new RequestError(applicationResources.http.notAuthenticated));
                } else if (response.status === 403) {
                    reject(new RequestError(applicationResources.http.unauthorized));
                } else if (response.status === 429) {
                    reject(new RequestError(applicationResources.http.tooManyRequests, { retryAfter: response.headers.get("retry-after") }));
                } else if (response.status === 413) {
                    reject(new RequestError(applicationResources.http.payloadTooLarge));
                } else if (response.status === 400) {
                    return response.json()
                        .then(data => handleValidationError(data))
                        .catch(e => reject(e));
                } else {
                    return response.json()
                        .then(data => {
                            if (data.error.stackTrace) {
                                console.error(`RequestError on ${path}. See below exception`);
                                console.error(data.error.stackTrace)
                            }
                            if (data.error.operationId) {
                                console.error(`RequestError on ${path}. OperationId ${data.error.operationId}`);
                            }
                            reject(new RequestError(data.error.message, null, data.error.operationId));
                        })
                        .catch(e => {
                            reject(e)
                        });
                }
            });
    });
};
