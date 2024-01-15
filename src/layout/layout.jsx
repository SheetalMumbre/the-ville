import React from "react";
import { BaseLayout } from "./base-layout";
import styled from "@emotion/styled";
import { useState } from "react";
import { keyframes } from "@emotion/css";
import HeaderContent from "./navbar";
import SideMenuBar from "./sidebar";
import FooterSocialMediaLink from "../components/common/footer-soclialmedia-link";

const Layout = ({ Header, narrowList, children, props }) => {
  //const { Header, narrowList, children} = props;

  const [showSideBar, setshowSideBar] = useState(true);
  const toggleSidebar = (isOpen) => setshowSideBar(isOpen);
  const bodyClass = showSideBar
    ? "offset-md-2 offset-sm-2 col-sm-10 col-md-10"
    : "col-sm-12 col-md-12";

  return (
    <BaseLayout>
      <HorizontalSplit>
        <SideMenuContainer
          className={`col-sm-2 col-md-2 sidebar ${
            showSideBar ? "open-sidebar" : "dismiss-sidebar"
          }`}
        >
          {<SideMenuBar toggleSidebar={toggleSidebar} />}
        </SideMenuContainer>
        {!showSideBar ? (
          <SideMenuOpenIcon>
            <span onClick={() => toggleSidebar(true)}>
              <h4>
                <i className="fa fa-lg fa-forward"></i>
              </h4>
            </span>
          </SideMenuOpenIcon>
        ) : null}
        <VerticalSplit>
          <HeaderContainer className={bodyClass}>
            <HeaderContent notificationCount={0} />
          </HeaderContainer>
          <div className={bodyClass}>
            <ModuleContainer>{children}</ModuleContainer>
          </div>
          <FooterSocialMediaLink />
        </VerticalSplit>
      </HorizontalSplit>
    </BaseLayout>
  );
};

export default Layout;

const VerticalSplit = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const HorizontalSplit = styled.div`
  flex: 1;
  display: flex;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;

const SideMenuContainer = styled.div`
  position: absolute;
  padding: 0px !important;
  margin: 0 !important  ;
  top: 0;
  left: 0;
  height: 100%;
  background: ${(props) => props.theme.palette.background.sideMenu};
  box-shadow: 9px 1px 8px 1px rgb(0 0 0 / 24%), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 2;
  position: fixed;

  & p {
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    margin: 0px;
    text-align: center;
  }

  & span {
    color: #fff;
    font-size: 12px;
    font-weight: 200;
  }
`;

const delayedShow = keyframes`
to {
     visibility: visible;
   }
 `;

const SideMenuOpenIcon = styled.div`
  width: 65px !important;
  padding: 13px 10px 10px 0px;
  color: #fff;
  position: absolute;
  text-align: right;
  bottom: 8px;
  left: -15px;
  z-index: 1;
  border-radius: 15px;
  background: ${(props) => props.theme.palette.background.sideMenu};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.379), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  visibility: hidden;
  animation: 0s linear 0.3s forwards ${delayedShow};
  position: fixed;
  cursor: pointer;
`;

const ModuleContainer = styled.div`
  height: 100%;
  margin: 0;
  position: relative;
  width: 100%;
  top: 70px;
  padding: 0px 25px 10px 25px;
`;

const HeaderContainer = styled.div`
  position: fixed;
  background: ${(props) => props.theme.palette.background.header};
  z-index: 1;
  top: 0;
  padding-top: 5px;
`;
