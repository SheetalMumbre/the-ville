import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TableRowAction } from "./table-actions/table-row-action.jsx";
import { GridOverlay } from '@mui/x-data-grid';
import { LinearProgress } from '@material-ui/core';
import { TableRowTextAction } from "./table-actions/table-row-text-action";

export const TableLoading = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, [])

  if (!visible) {
    return null;
  }

  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export const TableRowActions = styled.div`
  display: flex;
  line-height: 1;
  justify-content: center;
  flex: 1;
`

export const DataTableRowActions = ({ user, row, items }) => {
  return (
    <TableRowActions>
      {items.map((action, index) => (
        (!action.condition || action.condition(row)) && (
          action.icon
            ? (
              <TableRowAction
                key={`TableRowAction_${row.id}_${index}`}
                onClick={() => action.handler(row)}
                confirmationText={action.confirmation}
                icon={action.icon}
                isFetching={action.fetching && action.fetching(row)}
                user={user}
                role={action.role}
                tooltip={action.tooltip}
              />
            )
            : (
              <TableRowTextAction
                key={`TableRowAction_${row.id}_${index}`}
                onClick={() => action.handler(row)}
                confirmationText={action.confirmation}
                text={action.text}
                isFetching={action.fetching && action.fetching(row)}
                user={user}
                role={action.role}
              />
            )
        )
      ))}
    </TableRowActions>
  );
}

export const TablePanel = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 1px 5px #0000001a;
  background: ${props => props.theme.palette.background.paper};
  //margin: 10px 10px 0;
  border-radius: 4px;

  button {
    margin: 5px;
    white-space: nowrap;
  }
`
export const TableFooterPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme.palette.background.paper};
  border-radius: 4px;
  width: 100%;

  button {
    margin: 5px;
    min-width: 0;
    height: 36px;
  }
`

export const TableFooterSummary = styled.div`
  margin-right: 10px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
`

export const TextEllipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const DetailsFooterInfo = ({ summaryLabel, value, unit = null }) => (
  <DetailsFooterInfoArea>
    <CenteredLabel>{summaryLabel}:</CenteredLabel>
    <CenteredValue>{value}{unit}</CenteredValue>
  </DetailsFooterInfoArea>
);

const DetailsFooterInfoArea = styled.div`
  margin-left: 40px;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const CenteredLabel = styled.div`
  padding: 3px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.palette.text.columnHeader};
`;

const CenteredValue = styled.div`
  padding: 3px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;