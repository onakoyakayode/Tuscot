import React from 'react'
import './SideNav.css'

const SideNav = () => {
  return (
    <div className='sidenav'>
        <ul className='sidenavs'> 
            <li>Dashboard</li>
            <li className='active'>Projects</li>
            <li>My Task</li>
            <li>Message</li>
            <li>Analytics</li>
        </ul>
    </div>
  )
}

export default SideNav