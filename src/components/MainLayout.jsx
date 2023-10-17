import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'

const MainLayout = () => {
  return (
    <div>
        <Title/>
        <Outlet/>
        <Nav/>
    </div>
  )
}

export default MainLayout