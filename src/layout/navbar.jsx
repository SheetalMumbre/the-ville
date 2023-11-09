import styled from "@emotion/styled";
import avatar from "../assets/images/avatar.png";
import { Grid, Popover, Box } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp ,Logout} from "@mui/icons-material";
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
                    <Grid container variant="contained">
                        <Grid item xs={10}><UsernameWrapper><span>Username</span></UsernameWrapper></Grid>
                        <Grid item xs={2}> {true ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Grid>
                    </Grid>
                    <Popover>
                      <BoxDiv component="div">
                            <Logout style={MenuIcon} />
                      </BoxDiv>
                    </Popover>
                </MenuContainer>
                {/* <div>
                    <a>
                        <span>
                            Notification count
                        </span>
                    </a>
                </div> */}
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

const UsernameWrapper = styled.div`
  max-width: 140px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: grid;
`;

const BoxDiv = styled(Box)`
  font-size: 13px;
  min-width: 130px;
  font-style: inherit;
`
const MenuIcon = {
    fontSize: "13px",
    margin: "5px 5px 5px 0",
}