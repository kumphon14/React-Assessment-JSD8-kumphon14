import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import UserTable from '../Component/UserTable'

const AdminLayout = () => {
  return (
    <div>
        <Home/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout