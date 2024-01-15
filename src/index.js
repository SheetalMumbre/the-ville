import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/application/App';
import { Provider } from "react-redux";
import { configureStore } from './store/store';
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import { initializeApplication, initializeApplicationFailure } from "./components/application/logic/application.actions";
import { post } from "./utils/http";
import { configureValidation } from "./validation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const runApplication = (dispatch) =>
  post("/api/appData/getAppData", {})
    .then(response => {
      debugger;
      dispatch(initializeApplication(response));
    })
    .catch(error => {
      dispatch(initializeApplicationFailure(error));
    });

const history = createBrowserHistory();
const store = configureStore(history);
configureValidation();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App history={history} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

runApplication(store.dispatch); // execute initialization of the app in the background