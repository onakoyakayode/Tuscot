import React from 'react'
import { BellIcon, DownArrow, PlusSign} from '../../Icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <h2 className='nav-title'>Tuscot</h2>
        <div className='search-input'>
            <input type="text" className="search" name="search" placeholder="Search..." />
        </div>
        

        <div className='project'>
            <button className='project-btn'>
                <PlusSign />
                New Project
            </button>
            <BellIcon className='bellIcon'/>
            <div className='notification-dot'></div>
            <div className='profile'>
                <div className='profile-img'>
                    <img src="https://i.pravatar.cc/150?img=4" alt="profile" />
                </div>
                <div className='profile-details'>
                    <h4 className='profile-name'>Cavin petarson</h4>
                    <h5 className='profile-role'>Manager</h5>
                </div>
                <DownArrow className="downarrow" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar