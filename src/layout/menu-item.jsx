import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const MenuItem = (props) => {
  const { name, subMenus, icon, to } = props;

  return (
    <>
      <li>
        <Link to={to} className="menu-item">
          {name} <i className={`fa mt-2 pull-right ${icon}`}></i>
        </Link>
        {subMenus && subMenus.length > 0 ? (
          <SubMenu className="submenu">
            {subMenus.map((menu, index) => (
              <li key={index} className={menu.element ? "submenu-item" : ""}>
                <Link to={menu.path}>
                  {menu.name}
                  <i className={`fa ${menu.icon}`}></i>
                </Link>
              </li>
            ))}
          </SubMenu>
        ) : null}
      </li>
      <MenuDivider />
    </>
  );
};

export default MenuItem;

const SubMenu = styled.ul`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in;

  &.selected {
    max-height: 200px;
    padding-bottom: 15px;
  }

  & a.active-menu {
    background: ${(props) => props.theme.palette.background.sideMenu};
    border-radius: 30px;
    color: ${(props) => props.theme.palette.text.activeMenu};
    font-weight: bold;
  }

  & a {
    margin-left: 10px;
    font-size: 10px;
    padding: 5px 10px !important;
  }

  & li {
    border-left: 0.15em solid ${(props) => props.theme.palette.primary.main};
    margin: 0px 15px;
  }

  & i {
    color: #57f9ff;
    font-size: 12px;
    float: right;
    padding-top: 3px;
    padding-right: 10px;
  }
`;

const MenuDivider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background: #4a4545cc;
  right: 0px;
  position: relative;
`;
