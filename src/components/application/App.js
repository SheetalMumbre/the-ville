//import { Routes, Route } from 'react-router-dom';
import { Routing } from "../../routes";
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider, ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as ThemeProvider5 } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from "@material-ui/core";
import styled from "@emotion/styled";
import { getTheme } from "../../theme";
import { getTheme5 } from "../../theme5";
import { useMount } from "../../utils/hooks";
import { isNewerVersionAvailable } from "../../utils/api-client";
import { setApplicationReadyState, setFocusState } from './logic/application.actions';
import { Loader } from "../common/loader";
import { ConnectedRouter, push } from "connected-react-router"

const App = ({ history }) => {

    const isApplicationReady = true; //useSelector(state => state.application.isReady);
    const isApplicationError = useSelector(state => state.application.isError);

    const themeName = useSelector(state => state.application.theme);
    const theme = useMemo(() => getTheme(themeName), [themeName]);
    const theme5 = useMemo(() => getTheme5(themeName), [themeName]);
    const dispatch = useDispatch();

  useMount(() => {
    return history.listen(({ pathname }) => {
      if (isNewerVersionAvailable()) {
        dispatch(setApplicationReadyState(false));
        window.location.href = pathname;
      }
    });
  });

  // if (isApplicationError) {
  //   return <ErrorContainer>There was an error during application startup. Try to clear the application storage in the browser developer tools</ErrorContainer>;
  // }

  if (!isApplicationReady) {
    return <Loader />;
  }

  return (
    <StylesProvider injectFirst>
      <ThemeProvider5 theme={theme5}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Routing />
          </ThemeProvider>
        </MuiThemeProvider>
      </ThemeProvider5>
    </StylesProvider>
  );
};

export default App;

const ErrorContainer = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
  font-size: 22px;
`;