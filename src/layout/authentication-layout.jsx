import React from 'react';
import styled from '@emotion/styled';
import backgroundImage from '../assets/images/The-Ville-bg.jpg';
import { BaseLayout } from "./base-layout";

export const AuthenticationLayout = ({ children }) => {
  return (
    <BaseLayout>
      <BackgroundImage>
        {children}
      </BackgroundImage>
    </BaseLayout>
  );
}

const BackgroundImage = styled.div`
  display: flex;
  flex: 1;
  background-size: cover;
  background: #fff url(${backgroundImage}) no-repeat 0 100%;
  height:100%;
  background-size: cover;
  background-blend-mode: luminosity;
`
