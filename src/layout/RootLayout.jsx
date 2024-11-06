import React from 'react'
import Navber from '../Component/Navber'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navber/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout;