import React, { useState } from 'react'
import { ListBullet, PlusSign, Squares } from '../../Icons'
import Dashboard from '../Dashboard/Dashboard'
import './MainNav.css'

const MainNav = () => {

    const [counting, setCounting] = useState(03)

    setCounting = counting;

  return (
    <Dashboard className='dashboard-main-nav'>
        <div className='mainNav'>
            <div className='mainNav-icons'>
                <ListBullet />
                <Squares />
                <div className='plusSign'>
                    <PlusSign />
                </div>
            </div>
            <div>
                <h3>Working ({counting})</h3>
            </div>
        </div>
    </Dashboard>
  )
}

export default MainNav