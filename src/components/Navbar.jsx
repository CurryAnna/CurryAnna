import React from 'react'
import logo from '/assets/curry_anna.png'
const Navbar = () => {
  return (
    <nav className='z-20 absolute navbar'>
        <div className='logo-container'>
            <img className="logo" src={logo} alt="" />
        </div>
        <div className='navlinks-container'>
            <ul className="nav-links">
                <li><a href="#" className='hover:text-yellow-300'>Home</a></li>
                <li><a href="#" className='hover:text-yellow-300'>About</a></li>
                <li><a href="#" className='hover:text-yellow-300'>Services</a></li>
                <li><a href="#" className='hover:text-yellow-300'>Contact</a></li>
            </ul>
        </div>
        {/* <div>
            <a href="" ><h1 className='contact'>Contact Us</h1></a>
        </div> */}
    </nav>
  )
}

export default Navbar
