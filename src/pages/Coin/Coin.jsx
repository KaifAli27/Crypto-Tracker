import React from 'react'
import './Coin.css'

const Coin = () => {
  return (
    <div>
      <h2>Largest <br/>Crypto Tracker</h2>
      <p>
        Welcome to the world's largest altcoin cryptocurrency exchange and tracker. Sign up to explore more about Altcoins.
      </p>
      <form>
        <input type="text" placeholder='Search Altcoin..' />
        <button type='submit'>Search</button>
      </form>
      
    </div>
  )
}

export default Coin
