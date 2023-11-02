import React from 'react';
import styled from "@emotion/styled";
import MenuItem from './menu-item';
import sidebarlogo from "../assets/images/logo-white.png";

const Sidebar = () => {
    return(
        <SideBarContainer>
            <div className="mb-4">
                <p className="d-grid">
                    <SidebarLogo src={sidebarlogo} alt="theVille"/>
                    <span>Resort–Casino</span>
                </p>
            </div>

            <Menu className="menu">
                <ul>
                    <MenuItem/>
                </ul>
            </Menu>
            <div className="d-flex">
                <SidebarFooterLine />
                <SidebarCloseIcon>
                <span >
                    <h4>
                    <i className="fa fa-lg fa-backward"></i>
                    </h4>
                </span>
                </SidebarCloseIcon>
            </div>
        </SideBarContainer>
    )
}

export default Sidebar;


const SideBarContainer = styled.div`
  .selected {
    background: #e4450a36 !important;
  } 
`;

const Menu = styled.div`
  margin: 0px;
  max-height: 425px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > ul {
    padding: 0px !important;
  }

  & > ul > li > a {
    font-size: 17px;
    font-weight: 600;
    padding: 7px 20px;
  }

  & li {
    text-align: left;
    font-size: 15px;
    list-style-type: none;
    padding-left: 0px;
  }

  & li a {
    color: #fff;
    text-decoration: none;
    padding: 0px 5px;
    display: block;
    cursor:pointer;
  }
`;

const SidebarCloseIcon = styled.div`
  bottom: 10px;
  position: absolute;
  right: 12%;
  cursor: pointer;
`;

const SidebarFooterLine = styled.div`
  width: 67%;
  height: 2px;
  border-radius: 1px;

  left: 0px;
  position: absolute;
  bottom: 30px;
`;

const SidebarLogo = styled.img`
height: 60px;
width: auto;
margin: 25px auto 5px;
`;