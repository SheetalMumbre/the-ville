export const reduxFlow = reduxFlows => store => next => action => {
    let actionResult = next(action);

    const actions = [];

    for (const flow of reduxFlows) {
        if (flow.predicate(action.type)) {
            const result = flow.handler(action, store.dispatch, store.getState(), store.getState);
            if (result) {
                actions.push(result);
            }
        }
    }

    return actions.length ? Promise.all(actions) : actionResult;
}

export const handle = (pattern, handler) => ({
    handler: handler,
    predicate: getActionTypePredicate(pattern)
});

export const handleLatest = (pattern, handler) => {
    let timeout = 0;
    const debouncedHandler = (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => handler(...args), 0);
    };
    return handle(pattern, debouncedHandler);
};

const getActionTypePredicate = (pattern) => {
    if (!pattern) {
        throw new Error("Wrong pattern")
    }

    if (typeof pattern === 'function') {
        return pattern;
    }

    if (typeof pattern === 'string') {
        return (actionType) => pattern === "*" || pattern === actionType;
    }

    if (Array.isArray(pattern)) {
        return (actionType) => pattern.indexOf(actionType) !== -1;
    }
}
