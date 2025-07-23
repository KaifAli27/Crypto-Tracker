import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/final_logo.png'
import arrow from '../../assets/arrow.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol:"$"});
        break;
      }
      case "cad": {
        setCurrency({name: "cad", symbol:"$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol:"€"});
        break;
      }
      default : {
        setCurrency({name: "cad", symbol:"$"});
        break;
      }
      }
    }

  return (
    <div className='navbar'>
        <Link to={`/`}><img src={logo} alt='logo' className='logo'/></Link>
        <ul>
            <Link to={`/`}><li>Home</li></Link>
            <Link to={`/Whatif`}><li>What-If</li></Link>
            <Link to={`/portfolio`}><li>Portfolio</li></Link>
            <li>Features</li>
            <li>Pricing</li>
         </ul>
         <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="cad">CAD</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign Up <img src={arrow} alt="arrow" /></button>
        
         </div>
      
    </div>
  )
}

export default Navbar
