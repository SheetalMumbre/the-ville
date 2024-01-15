import React from 'react'
import UsersTableHeader from './users-table-header.component';
import { UsersTableFooter } from './users-table-footer.component';
import { UsersTable } from './users-table.component';

const UsersListPage = () => {

  return (
    <div>
        <h2>Users</h2>
        <UsersTableHeader/>
        <UsersTable/>
        <UsersTableFooter/>
    </div>
  )
}

export default UsersListPage;
