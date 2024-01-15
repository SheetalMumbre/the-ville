import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import { Tooltip } from "@material-ui/core";
import styled from "@emotion/styled";
import { isStringResourcesEditMode } from "./string-resources";
import { prepareStringResourcesEditMode } from "./logic/string-resources.action";

export const StringsSwitcher = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.application.isAuthenticated);

  const handleSwitchStrings = useCallback(() => {
    dispatch(prepareStringResourcesEditMode(!isStringResourcesEditMode()))
  }, [dispatch]);

  return (
    <Container role="contentinfo">
      <Tooltip title={isAuthenticated ? "" : "Please login"}>
        <div>
          <Button key="undo" variant="text" color="primary" onClick={handleSwitchStrings} disabled={!isAuthenticated}>
            Switch keys
          </Button>
        </div>
      </Tooltip>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 10px;
  margin-bottom: 10px;
  z-index: 9999;

  button {
    color: #000000 !important;
    background: #ffffff85;
    border-radius: 14px;
    font-size: 12px;
    text-decoration: none;

    &:hover {
      background: #ffffff;
    }
  }

  @media screen and (max-width: 959.5px) {
    display: none;
  }
`
