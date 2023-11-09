import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = (props) => {
    const {name, icon, subMenus, to} = props;
    return(
        <>
        <li>
            <Link to={to} className="menu-item">
                {name} <i className={`fa mt-2 pull-right ${icon}`}></i>
            </Link>
          
                {subMenus && (subMenus.length > 0) ? (
                       <SubMenu className="submenu">
                        {subMenus.map((menu, index) => (
                            
                            <li key={index} className={menu.element ? "submenu-item" : ""}>
                                <Link to={menu.path}>
                                    {menu.name}
                                </Link>
                            </li>
                           
                        ))
                        }
                       
                   </SubMenu>
                ) : null }
        </li>
        <MenuDivider />
        </>
    )
}

export default MenuItem;

const SubMenu = styled.ul`
// max-height: 0;
// overflow: hidden;
// transition: max-height 0.2s ease-in;

// & li {
//     margin: 0px 15px;
//   }
`;

const MenuDivider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background: #4a4545cc;
  right: 0px;
  position: relative;
`;
