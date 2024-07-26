import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <ul>
            <li>Home</li>
            <li>What-If</li>
            <li>Features</li>
            <li>Pricing</li>
         </ul>
         <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="cad">CAD</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign Up <img src={arrow} alt="arrow" /></button>
        
         </div>
      
    </div>
  )
}

export default Navbar
