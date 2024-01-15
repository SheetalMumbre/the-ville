import styled from "@emotion/styled";
import { Button, Grid } from "@material-ui/core";

export const Header = styled.h1`
  margin: 20px 0 20px 0;
  text-align: center;
  font-size: 22px;
  color: #777474;
  font-weight: 600;
`;

export const SignInExternalButton = styled(Button)`
  display: flex;
  color: #e4e1e0;
  border: 1px solid #e4e1e0;
  padding: 8px 20px;
  margin: 0 auto 15px;
  width: 225px;
  justify-content: flex-start;

  img {
    height: 20px;
    margin-right: 20px;
  }
`;

export const SignInExternals = styled.div`
  margin-bottom: 50px;
`;

export const LoginButton = styled.button`
  border: none;
  outline: none;
  height: 40px;
  background: #1c8adb;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  width: 100%;

  &:hover {
    cursor: pointer;
    background: #ef4410;
    color: #fff;
  }
`;

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: #777474 !important;
  padding: 0 !important;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.palette.primary.main} !important;
  }
`;

export const LoginIconStyle = {
  color: "#918e8e",
  padding: "1px 2px 5px 1px",
};
