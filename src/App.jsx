import React from 'react';
import Owner from './pages/Owner';
import RootLayout from './layout/RootLayout';
import AdminLayout from './layout/AdminLayout';
import AdminTodoList from './layout/AdminTodoList';
import UserTableHome from './Component/UserTable';
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path="/" element={<AdminLayout />}> {/*หน้า Homeจะอยู่ตรงนี้*/}
            <Route path="adminHome" element={<AdminTodoList />}/>
            <Route path="UserTable" element={<UserTableHome />}/>
        </Route>
        

        <Route path='Owner' element={<Owner />}/></Route>
    )

  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
