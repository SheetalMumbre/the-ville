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

export const LoginHeader = styled.div`
  width: 100%;
  text-align: center;

  img{
    max-width:100%;
    margin:5px 10px 10px;
  }
`;

export const LoginPanelContent = styled.div`
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
  background:#fff;

  & a {
  text-decoration: none;
  font-size: 13px;
  color: #777474;
  }
}
`;