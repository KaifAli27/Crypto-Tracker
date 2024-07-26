import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='hero'>
      <h1>Kaif's <br/>Crypto Tracker</h1>
      <p>
        Welcome to my cryptocurrency tracker. Navigate to the What-If page to see what you missed out on by not investing earlier.
      </p>
      <form>
        <input type="text" placeholder='Search Altcoin..' />
        <button type='submit'>Search</button>
      </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className='marketcap'>Market Cap</p>

        </div>
      </div>
      
    </div>
  )
}

export default Home
