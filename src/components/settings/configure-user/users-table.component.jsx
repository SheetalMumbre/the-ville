import styled from "@emotion/styled";
import { CellContent, DataTable } from "./common/datatable";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./logic/configure-user.actions";
import { readFromLocalStorage } from "../../../utils/storage";

export const UsersTable = () => {
  debugger;
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getUsers());
  },[dispatch])

 
  const [currentPage, setCurrentPage] = useState(1);

  const table = useSelector((state) => state.configureUser.table);
  const fetching = useSelector(state => state.configureUser.tableFetching);

  // const usersData = useSelector((state) => state.users.data);

  // useEffect(() => {
  //     dispatch(getUsers(currentPage));
  // },[dispatch, currentPage]);

  const handlePageChange = (page) => {
    debugger;
    setCurrentPage(page);
    dispatch(getUsers(page)); // Fetch data when the page changes
  };

  //  const formData = [
  //     {
  //       userEmail: 'user1@example.com',
  //       customer: 'Customer A',
  //       role: 'Admin',
  //       name: 'John Doe',
  //       office: 'Office A',
  //       lastLoggedIn: '2022-01-01',
  //     },
  //     // Additional data objects...
  //   ];

  const columns = useMemo(
    () => [
      {
        field: "userEmail",
        headerName: "User Email",
        flex: 1,
        renderCell: (params) => <CellContent>{params.value}</CellContent>,
      },
      {
        field: "customer",
        headerName: "Customer",
        flex: 1,
        renderCell: (params) => <CellContent>{params.value}</CellContent>,
      },
      {
        field: "role",
        headerName: "Role",
        flex: 1,
        renderCell: (params) => <CellContent>{params.value}</CellContent>,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        renderCell: (params) => <CellContent>{params.value}</CellContent>,
      },
      {
        field: "office",
        headerName: "Office",
        flex: 1,
        renderCell: (params) => <CellContent>{params.value}</CellContent>,
      },
      {
        field: "lastLoggedIn",
        headerName: "Last Logged In",
        flex: 1,
        //format: formatDate
      },
    ],
    []
  );

  //const formData = readFromLocalStorage('formData');
  //const dataUpdate = JSON.stringify(formData, null, 2);
  //console.log('mydata'+dataUpdate);

  return (
    <TableCard>
      <DataTable
        paginatedData={table}
        columns={columns}
        loading={fetching}
        //onPageChange={handlePageChange}
      />
    </TableCard>
  );
};

const TableCard = styled.div`
  background: ${(props) => props.theme.palette.background.paper};
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 1px 5px #0000001a;
  min-width: 1250px;
  flex: 1;

  a {
    color: ${(props) => props.theme.palette.primary.main};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  :hover {
    cursor: pointer;
  }
`;
