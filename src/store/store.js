import "regenerator-runtime/runtime";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { reduxFlow } from "./redux-flow";
import { modules } from "../module";
import { setSiteMap } from "../site-map";

export const configureStore = (history) => {

  const flows = modules.reduce((prev, current) => [...prev, ...current.flows], []);

  const siteMapItems = modules.filter(m => m.siteMap).flatMap(m => m.siteMap).flatMap(a => a);
  setSiteMap(siteMapItems);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(routerMiddleware(history), thunk, reduxFlow(flows));
  const enhancer = composeEnhancers(middleware);
  const rootReducer = createRootReducer(history);
  return createStore(rootReducer, {}, enhancer);

}

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    ...modules.filter(m => m.reducer).reduce((prev, current) => ({ ...prev, [current.name]: current.reducer }), {})
  });
};