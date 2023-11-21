export const action = (name) => {
    return{
        invoke: (args) => ({ type: `${name}_INVOKE`, ...args }),
        REQUEST: `${name}_REQUEST`
    }
}