import React from 'react'
import { FaQuestion } from 'react-icons/fa'

export const Header = () => {
  return (
    <header>
      <span className='logo'>VGAN Tracker</span>
      <span className='header-links'>
        {/* <i className='fa-solid fa-question'></i> */}
        <FaQuestion />
      </span>
    </header>
  )
}
