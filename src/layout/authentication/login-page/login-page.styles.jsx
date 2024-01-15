import styled from "@emotion/styled";

export const LoginPanel = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background: #96a1a8;
`;

export const LoginPanelContent = styled.div`
  background: ${(props) => props.theme.palette.background.loginForm};
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 35px 30px 15px;
  border-radius: 35px;
  z-index: 1;
  text-align: center;
  width:28% !important;

  & a {
  text-decoration: none;
  font-size: 13px;
  color: #777474;
  }
}
`;

export const FadingPanel = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export const LoginHeader = styled.div`
  position: fixed;
  top: 20px;
  width: 100%;
  background-color: #ffffff00;
  text-align: center;
  font-size: 50px;
  color: #05263a;
  font-weight: 650;
`;

export const LoginAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: calc(50% - 40px);
  background: ${(props) => props.theme.palette.background.loginForm};
`;

export const LoginFooter = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  text-align: center;
`;

export const ExternalSignIn = styled.a`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 14px;
`;

export const FooterLogo = styled.img`
  height: 40px;
  width: 185px;
  background: #d5cecec4;
  border-radius: 12px;
`;

export const LoginFooterLeft = styled.div`
  float: left;
`;
