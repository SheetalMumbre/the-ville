import React from 'react';
import styled from '@emotion/styled';
import backgroundImage from '../assets/images/login_bg.png';
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
  background: #fff url(${backgroundImage}) no-repeat 0 100%;
  background-size: cover;
`
