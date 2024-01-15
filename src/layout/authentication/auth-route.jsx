import React from "react";
import { useNavigate, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getRedirectUrl, loginUrl, removeRedirectUrl, setRedirectUrl } from "./logic/authentication.service";
import { BaseLayout } from "../base-layout";
import { ROUTE_CHANGED } from "../../components/application/logic/application.const";

export const AuthRoute = ({ component: Component, roles, computedMatch, ...rest }) => {
    debugger
    const isAuthenticated = useSelector(state => state.application.isAuthenticated);
    const user = useSelector(state => state.application.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        debugger;
        setRedirectUrl(window.location.pathname);
        navigate(loginUrl);
        return null; // Render nothing until authentication is checked
      }
    
      const redirectUrl = getRedirectUrl();
    
      if (redirectUrl) {
        removeRedirectUrl();
        navigate(redirectUrl);
        return null; // Render nothing until redirection is done
      }
    
      if (roles && roles.length && !roles.some(neededRole => user.roles.some(userRole => userRole === neededRole))) {
          return <BaseLayout authError={"Not authorized"} />;
      }
    
      dispatch({ type: ROUTE_CHANGED, url: computedMatch.url, path: computedMatch.path, params: computedMatch.params });
      return <Component />;
}
