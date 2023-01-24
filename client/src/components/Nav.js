import React from 'react'
// import { BrowserRouter as Router, NavLink, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaCarrot } from 'react-icons/fa'
import { FaBalanceScale } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='navList'>
        <li>
          <NavLink className='navLink' to='/'>
            {/* <i className='fa-solid fa-scale-unbalanced nav-icon'></i> */}
            <FaBalanceScale className='nav-icon' />
          </NavLink>
        </li>
        <li>
          <NavLink className='navLink' to='/search'>
            {/* <i className='fa-solid fa-magnifying-glass'></i> */}
            <FaSearch className='nav-icon' />
          </NavLink>
        </li>
        <li>
          <NavLink className='navLink' to='/foods'>
            {/* <i className='fa-solid fa-carrot nav-icon'></i> */}
            <FaCarrot className='nav-icon' />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
