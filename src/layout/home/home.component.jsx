import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { applicationResources } from '../../components/application/logic/application.const';
import { resource } from '../../components/string-resources/string-resources';
import { logout } from '../authentication/logic/authentication.action';

const Home = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    //handleClose();
  }

  return (
    <div>home.component

      <Button fullWidth onClick={handleLogout}>{resource(applicationResources.user.logout)}</Button>

    </div>
  )
}


export default Home;
