import React, { useEffect, useMemo, useRef, useState } from "react";
import { DataTableRowActions, TableLoading } from "./table";
import { RouteLink } from "./route-link";
import styled from "@emotion/styled";
import { DataGrid, GridOverlay, GridPagination } from "@mui/x-data-grid";
import { css } from "@emotion/css";
import { Checkbox, Icon, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export const DataTable = ({
  rowHeight,
  columns,
  paginatedData,
  loading,
  onPageChange,
  actions,
  actionsWidth,
  checkboxSelection,
  selectionModel,
  onSelectionModelChange,
  isRowSelectable,
  autoHeight,
  onRowClick,
  getRowClassName,
  onCellDoubleClick,
}) => {
  debugger;
  const gridRef = useRef();
  const selectionNotEmpty = useMemo(
    () => selectionModel && selectionModel.length !== 0,
    [selectionModel]
  );
  const user = useSelector((state) => state.application.user);

  // Temporary hack to fix scroll issue
  useEffect(() => {
    let timeout = null;
    if (gridRef.current) {
      gridRef.current.style.height = "calc(100% - 1px)";
      timeout = setTimeout(() => {
        gridRef.current.style.height = "";
      }, 500);
    }
    return () => timeout && clearTimeout(timeout);
  }, [selectionNotEmpty]);

  const columnsWithActions = useMemo(() => {
    debugger;
    return [
      ...columns.map((column) => {
        const renderCell =
          column.renderCell ||
          (column.format &&
            (({ row }) => column.format(row[column.field], row))) ||
          (column.link &&
            (({ row }) => (
              <CellContent title={row[column.field]}>
                <RouteLink link={column.link(row)}>
                  {row[column.field]}
                </RouteLink>
              </CellContent>
            ))) ||
          (column.href &&
            (({ row }) => (
              <CellContent>
                <Link href={column.href(row)}>{row[column.field]}</Link>
              </CellContent>
            )));

        return {
          ...column,
          cellClassName:
            `${column.renderInline ? regularDisplayClass : ""} ${
              column.cellClassName
            }`.trim() || null,
          sortable: column.sortable || false,
          renderCell: renderCell,
        };
      }),
      ...(actions
        ? [
            {
              field: " ",
              headerName: "",
              sortable: false,
              renderCell: ({ row }) => (
                <DataTableRowActions items={actions} row={row} user={user} />
              ),
              width: actionsWidth || actions.length * 30 + 16,
            },
          ]
        : []),
    ];
  }, [actions, columns]);

  return (
    <DataGridContainer>
      <DataGrid
        autoHeight={autoHeight}
        isRowSelectable={isRowSelectable}
        ref={gridRef}
        onSelectionModelChange={onSelectionModelChange}
        selectionModel={selectionModel}
        columns={columnsWithActions}
        rowHeight={rowHeight || 40}
        headerHeight={42}
        rows={(paginatedData) || []}
        checkboxSelection={checkboxSelection}
        hideFooterSelectedRowCount
        disableColumnMenu
        disableSelectionOnClick
        rowsPerPageOptions={[]}
        loading={loading}
        page={paginatedData?.pageNumber ? paginatedData.pageNumber - 1 : 0}
        rowCount={(paginatedData && paginatedData.totalCount) || 0}
        pageSize={(paginatedData && paginatedData.pageSize) || 1}
        hideFooter={
          (paginatedData &&
            paginatedData.totalCount <= paginatedData.pageSize) ||
          false
        }
        onPageChange={(page) => onPageChange(page === 0 ? 1 : page + 1)}
        //density={"compact"}
        paginationMode="server"
        pagination
        disableColumnReorder={true}
        onRowClick={onRowClick}
        onCellDoubleClick={onCellDoubleClick}
        components={{
          LoadingOverlay: TableLoading,
          NoRowsOverlay: NoDataOverlay,
          BaseCheckbox: (props) => (
            <Checkbox
              {...props}
              name="selectionCheckbox"
              classes={{
                root: gridCheckBox,
              }}
              icon={
                <CheckIcon>
                  <FontAwesomeIcon icon={["fa", "square"]} />
                </CheckIcon>
              }
              indeterminateIcon={
                <CheckIcon>
                  <FontAwesomeIcon icon={["fa", "square-minus"]} />
                </CheckIcon>
              }
              checkedIcon={
                <CheckIcon>
                  <FontAwesomeIcon icon={["fa", "square-check"]} />
                </CheckIcon>
              }
            />
          ),
        }}
        getRowClassName={getRowClassName}
      />
    </DataGridContainer>
  );
};

export const CellContent = ({ useContentAsTitle, title, children }) => {
  return (
    <CellContentStyle title={useContentAsTitle ? children : title}>
      {children}
    </CellContentStyle>
  );
};

const CellContentStyle = styled.div`
  display: block !important;
  overflow: hidden;
  text-overflow: ellipsis !important;
`;

const CheckIcon = styled.div`
  font-size: 16px;
`;
const gridCheckBox = css`
  margin: 0 !important;
`;
const NoDataOverlay = () => (
  <GridOverlay>
    <NoDataContainer>
      <Icon>info</Icon>
      <label>No data to show</label>
    </NoDataContainer>
  </GridOverlay>
);

const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b8b8b8;

  label {
    margin-top: 10px;
  }
`;

const regularDisplayClass = css`
  display: block !important;
`;

const DataGridContainer = styled.div`
  height: calc(100vh - 240px);

  .MuiDataGrid-virtualScroller::-webkit-scrollbar {
    width: 5px;
  }
  .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb {
    background: #c8c8c8;
    border-radius: 5px;
  }
`;
