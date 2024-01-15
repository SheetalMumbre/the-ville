import React from 'react';
import { StringsEditor } from "./string-editor";

let stringResources = {};
let isEditMode = false;

export const updateResources = (values) => {
  Object.assign(stringResources, values);
}

export const setStringResourcesEditMode = (isEnabled) => {
  isEditMode = isEnabled;
}

export const isStringResourcesEditMode = () =>
  isEditMode;

export const resource = (key, noEditor) =>
  getResource(key, noEditor);

export const resourceFormat = (key, data, noEditor) => {
  const valueMapper = value =>
    Object.keys(data || {}).reduce((result, stringKey) => result.replaceAll(`{${stringKey}}`, data[stringKey]), value || "");

  return getResource(key, noEditor, valueMapper);
}

const getResource = (key, noEditor, mapper) => {
  if (!key) {
    return "(wrong key)";
  }
  const value = stringResources[key];

  if (isEditMode) {
    return noEditor
      ? key
      : <StringsEditor stringKey={key} value={value} />;
  }

  if (value === undefined) {
    return key;
  }

  return mapper ? mapper(value) : value;
}
