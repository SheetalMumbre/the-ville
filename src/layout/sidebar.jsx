import React from "react";
import { useEffect } from "react";
import MenuItem from "./menu-item";
import { menuList } from "../menu-list";
import styled from "@emotion/styled";

export const SideMenuBar = ({ toggleSidebar }) => {
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        menuItems.forEach((el) => {
          el.classList.remove("selected");
          el.parentElement.classList.remove("active-menu-border");
        });
        removeActiveClassFromSubMenu();
        el.parentElement.classList.toggle("active-menu-border");
        el.classList.toggle("selected");
        const next = el.nextElementSibling;
        if (next !== null) {
          next.classList.toggle("selected");
        }
      });
    });

    let submenuItems = document.querySelectorAll(".submenu-item>a");
    submenuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        submenuItems.forEach((el) => el.classList.remove("active-menu"));
        el.classList.toggle("active-menu");
      });
    });
  }, []);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".submenu").forEach((el) => {
      el.classList.remove("selected");
    });
    document.querySelectorAll(".submenu-item>a").forEach((el) => {
      el.classList.remove("active-menu");
    });
  };

  return (
    <SideBarContainer>
      <div className="mb-4">
        <p className="d-grid">
          The Ville
          <span>Resort-Casino</span>
        </p>
      </div>
      <Menu className="menu">
        <ul>
          {menuList.map((menuItem, index) =>
            menuItem.isMenu ? (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.path}
                subMenus={menuItem.subMenus || []}
                icon={menuItem.icon}
              />
            ) : null
          )}
        </ul>
      </Menu>
      <div className="d-flex">
        <SidebarFooterLine />
        <SidebarCloseIcon>
          <span onClick={(event) => toggleSidebar(false)}>
            <h4>
              <i className="fa fa-lg fa-backward"></i>
            </h4>
          </span>
        </SidebarCloseIcon>
      </div>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  .selected {
    background: #0ae4ca36 !important;
  }

  .active-menu-border {
    border-top: 0.09em solid
      ${(props) => props.theme.palette.background.sideMenuSelectedBorder};
    border-bottom: 0.09em solid
      ${(props) => props.theme.palette.background.sideMenuSelectedBorder};
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
    font-size: 15px;
    font-weight: 700;
    padding: 10px 20px;
  }

  & li {
    text-align: left;
    font-size: 15px;
    list-style-type: none;
    padding-left: 0px;
  }

  & li a:hover {
    color: ${(props) => props.theme.palette.background.hover};
  }

  & li a {
    color: #fff;
    text-decoration: none;
    padding: 0px 5px;
    display: block;
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
  background: ${(props) => props.theme.palette.primary.dark};
  left: 0px;
  position: absolute;
  bottom: 30px;
`;

export default SideMenuBar;
