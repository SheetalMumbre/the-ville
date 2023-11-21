import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import { connectRouter } from "connected-react-router";
import { modules } from "../module";

export const configureStore = (history) => {
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const middleware = applyMiddleware(thunk);
 const enhancer = composeEnhancers(middleware);
 const rootReducer = createRootReducer(history);
 return createStore(rootReducer,{},enhancer);
}

const createRootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        ...modules.filter(m => m.reducer).reduce((prev, current) => ({ ...prev, [current.name]: current.reducer }), {})
      });
}