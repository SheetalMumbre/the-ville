import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../login-form/login-form.component';
import { LoginPanel, LoginPanelContent, LoginHeader, LoginAvatar, LoginFooter, ExternalSignIn, FooterLogo, LoginFooterLeft, } from '../login-page/login-page.styles';
import { AuthenticationLayout } from '../../authentication-layout';
import { authenticationPanel } from '../logic/authentication.const';
import { useTitle } from '../../../utils/hooks';
import { resource } from '../../../components/string-resources/string-resources';
import { authenticationResources } from '../logic/authentication.const';
import avatar from '../../../assets/images/avatar.png';
import logo from '../../../assets/images/bgl-logo.svg';
import FooterSocialMediaLink from '../../../components/common/footer-soclialmedia-link';

const LoginPage = () => {
  const visiblePanel = useSelector(state => state.authentication.visiblePanel);
  const [lastPanel, setLastPanel] = useState(visiblePanel);
  useTitle("Login");

  const getDirectionFor = (panel) =>
    Object.keys(authenticationPanel).indexOf(lastPanel) < Object.keys(authenticationPanel).indexOf(panel)
      ? "left"
      : "right"

  return (
    <div>
      <AuthenticationLayout>
        <LoginPanel>
          <LoginHeader>MyBGL</LoginHeader>
          <LoginPanelContent>
            <LoginAvatar src={avatar} alt="avatar"></LoginAvatar>
            <LoginForm />
          </LoginPanelContent>
          <LoginFooter>
            <LoginFooterLeft>
              <ExternalSignIn href="#">
                {resource(authenticationResources.login.dontHaveUser)}
              </ExternalSignIn>
              <div>
                <a href="https://bestgloballogistics.nl/" target="_blank">
                  <FooterLogo src={logo}></FooterLogo>
                </a>
              </div>
            </LoginFooterLeft>
            <FooterSocialMediaLink />
          </LoginFooter>
        </LoginPanel>
      </AuthenticationLayout>
    </div>
  );
};

export default LoginPage;
