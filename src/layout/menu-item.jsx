import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = () => {
    return(
        <>
        <li>
            <Link to={"/"} className="menu-item">
                Quote
            </Link>
            <SubMenu className="submenu">
                <li>
                    <Link>New Quatation</Link>
                    <SubMenu className="submenu">
                        <li>
                            <Link to={"/"}>Air fright quote</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Sea fright quote</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Road fright quote</Link>
                        </li>
                    </SubMenu>
                </li>
            </SubMenu>
        </li>
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