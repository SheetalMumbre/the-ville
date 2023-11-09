import styled from "@emotion/styled";
// import { InputBase } from "@material-ui/core";
// import { css } from '@emotion/css';
import { InputBase } from "@mui/material";
import { css } from "@mui/material";
import { Search } from "@mui/icons-material";

const GlobalSearchInput = () => {
  return (
    <>
    <SearchBar>
        <InputBase fullWidth placeholder={"Search"} className={inputClass}>
            <Search color="primary" style={SearchIconStyle} />
        </InputBase>
    </SearchBar>
    </>
  )
}

export default GlobalSearchInput;

const SearchBar = styled.div`
  padding : 4px;
  box-shadow: 1px 1px 5px #918686;
  border-radius: 20px;
  margin-left: 23px;
  padding-left: 20px;
  margin-top: 5px;
`;

const inputClass = css`
    border: 1px solid #f2ceb5a3;
    background-color: #ffffff;
    height: 32px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 13px;
    border-radius: 20px;
    margin: 6px 0 0 0;
`;

const SearchIconStyle = {
    padding: "4px 0px 1px",
    marginLeft: "-3px"
  };