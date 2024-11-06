import React from 'react'
import AdminHome from '../Component/AdminHome'
import UserTable from '../Component/UserTable'
import { Outlet } from 'react-router-dom'

const AdminTodoList = () => {
  return (
    <div>
        <AdminHome />
        {/*<UserTable/>*/}
        <Outlet/>
    </div>
  )
}

export default AdminTodoList;