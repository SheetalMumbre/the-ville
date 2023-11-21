export const action = (name) => {
    return{
        INVOKE: `${name}_INVOKE`,
        REQUEST: `${name}_REQUEST`,
        SUCCESS: `${name}_SUCCESS`,
        FAILURE: `${name}_FAILURE`,
        name: name,
        invoke: (args) => ({ type: `${name}_INVOKE`, ...args }),
        failure: (args) => ({ type: `${name}_FAILURE`, ...args })
    }
}