import styled from "@emotion/styled";
import { TableFiltersContainer } from "./common/table-filters/table-filters-container";

const UsersTableHeader = () => {
    return(
        <TablePanel>Table Header 
            <TableFiltersContainer>
                 table dynamic filter
            </TableFiltersContainer>
        </TablePanel>
    )
};

export default UsersTableHeader;


export const TablePanel = styled.div`
    display: flex;
    justify-content: flex-end;
    box-shadow:0 1px 5px #0000001a;
    background: ${props => props.theme.palette.background.paper};
    border-radius: 4px;

  button {
    margin: 5px;
    white-space: nowrap;
  }

`