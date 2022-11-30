import React from 'react'
import MainNav from '../MainNav/MainNav'
import SideNav from '../SideNav/SideNav'
import './Dashboard.css'

const Dashboard = ({children}) => {
  return (
    <div className='dashboard'>
        <div className='side-nav'>
           <SideNav /> 
        </div>
        <div className='mainNav'>
            <MainNav />
            {children}
        </div>
    </div>
  )
}

export default Dashboard