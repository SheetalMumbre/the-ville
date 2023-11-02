import styled from "@emotion/styled";
import avatar from "../assets/images/avatar.png";
import { Grid, Popover } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import GlobalSearchInput from "../components/global-search/global-search-input";

const Navbar = () => {
    return(
        <div className="row">
            <div className="col-md-6 col-sm-6">
                <GlobalSearchInput/>
            </div>
            <div className="col-md-6 col-sm-6 d-flex justify-content-end mt-1">
                <div>
                    <UseImage src={avatar} alt="avatar"/>
                </div>
                <MenuContainer>
                    <Grid>
                        <Grid item xs={10}>Username</Grid>
                        <Grid item xs={2}> <KeyboardArrowUp />  <KeyboardArrowDown /></Grid>
                    </Grid>
                    <Popover>Logout</Popover>
                </MenuContainer>
                <div>
                    <a>
                        <span>
                            Notification count
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
    )
};

export default Navbar;

const UseImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #a3a2a252;
  background-color: #ffffff;
  margin-top:2px;
  `;

const MenuContainer = styled.div`
margin: 5px 8px;
cursor: pointer;
`;

const NavFaIcon = styled.i`
  padding: 15px 10px;
`;