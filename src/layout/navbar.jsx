import React, { useCallback } from "react";
import GlobalSearch from "./global-search";
import logo from "../assets/images/bgl-logo.svg";
import avatar from "../assets/images/avatar.png";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "@emotion/styled";
import { logout } from "./authentication/logic/authentication.action";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
 
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="row">
      {/* <div className="col-md-3 col-sm-3">
        <a href="https://bestgloballogistics.nl/" target="_blank">
          <Logo src={logo} alt="MyBGL" />
        </a>
      </div> */}
      <div className="col-md-8 col-sm-8">
        <GlobalSearch />
      </div>
      <div className="col-md-4 col-sm-4 d-flex justify-content-end mt-1">
        <div>
          <UserImage src={avatar} alt="avatar" />
        </div>
        <DropdownContainer>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" style={HeaderUser}>
              <UsernameWrapper>Username</UsernameWrapper>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="" onClick={()=>handleLogout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </DropdownContainer>
        <div>
          <a>
            <span>
              <NavFaIcon className="fa fa-lg fa-bell-o "></NavFaIcon>
              {props.notificationCount > 0 ? (
                <NotificationBadge>{props.notificationCount}</NotificationBadge>
              ) : null}
            </span>
          </a>
        </div>
        <div className="header-icon">
          <a>
            <span>
              <NavFaIcon className="fa fa-lg fa-question-circle"></NavFaIcon>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const DropdownContainer = styled.div`
  .dropdown-item:active {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  .dropdown-menu {
    margin-top: 10px !important;
  }
  .dropdown-menu.show {
    border: none;
    background-color: #e3e3e3;
    border-radius: 0;
    padding: 0;
    font-size: 12px;
  }
  .dropdown-menu.show :hover {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: #fff;
  }
  .dropdown-toggle::after {
    margin-left: 1.255em !important;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const HeaderUser = {
  border: "none",
  padding: "10px 0px 0px 5px",
  fontSize: "14px",
  textAlign: "left",
  maxWidth: "140px",
  textOverflow: "ellipsis",
  overflow: "hidden",
};

const Logo = styled.img`
  height: 60px;
  width: 250px;
  background: transparent;
  border-radius: 30px;
  margin: -5px 5px 0 10px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #a3a2a252;
  background-color: #ffffff;
`;

const UsernameWrapper = styled.span`
  color: ${(props) => props.theme.palette.text.primary};
`;

const NavFaIcon = styled.i`
  color: ${(props) => props.theme.palette.primary.main};
  padding: 15px 10px;
`;

const NotificationBadge = styled.div`
  background-color: #ff0000e3;
  font-size: 8px;
  color: white;
  text-align: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: relative;
  top: -38px;
  left: 22px;
`;
