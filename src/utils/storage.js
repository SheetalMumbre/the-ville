export const saveInLocalStorage = (key, value) => {
    try {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        console.warn(error);
    }
}

export const readFromLocalStorage = (key, createDefaultValue) => {
    try {
        const stringValue = localStorage.getItem(key);
        if (!stringValue) {
            return persistDefaultValue(key, createDefaultValue);
        }
        return JSON.parse(stringValue);
    } catch (error) {
        console.warn(error);
        return persistDefaultValue(key, createDefaultValue);
    }
}

export const localStorageKeyExists = (key) =>
    !!localStorage.getItem(key);

export const removeFromLocalStorage = key => {
    localStorage.removeItem(key);
}

const persistDefaultValue = (key, createDefaultValue) => {
    const defaultValue = createDefaultValue && createDefaultValue();
    if (defaultValue) {
        saveInLocalStorage(key, defaultValue);
    }
    return defaultValue;

}
