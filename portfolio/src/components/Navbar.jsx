import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <div className='navbar__body'>
        <div className='navbar__left'>
          <h1 className='navbar__heading'>Portfolio</h1>
        </div>
        <div className='navbar__center'>
          <ul className='navbar__list'>
            <li className='navbar__listItems'>Resume</li>
            <li className='navbar__listItems'>Projects</li>
            <li className='navbar__listItems'>About</li>
          </ul>
        </div>
        <div className='navbar__right'>
          <button className='navbar__contactButton'>Contact Me</button>
        </div>

    </div>
    </>
  )
}

export default Navbar