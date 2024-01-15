import styled from "@emotion/styled";

export const TableFiltersContainer = ({childern}) => {
    return(
        <TableFiltersContainerStyled>
            {childern}
        </TableFiltersContainerStyled>
    )
};

const TableFiltersContainerStyled = styled.div`
  padding: 6px;
  display: flex;
  width: 100%;

  .MuiInput-root {
    border: 0px !important;
    outline: none;
    border-radius: 0px;
}`