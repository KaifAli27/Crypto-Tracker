import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'


const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const InputHandler = (event) => {
    setInput(event.target.value);
    if(event.target.value === ""){
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }

  useEffect(()=>{
    setDisplayCoin(allCoin);
  }, [allCoin])

  return (
    <div className='Home'>
      <div className='hero'>
      <h1>Kaif's <br/>Crypto Tracker</h1>
      <p>
        Welcome to my cryptocurrency tracker. Navigate to the What-If page to see what you missed out on by not investing earlier.
      </p>
      <form onSubmit={searchHandler}>
        <input onChange={InputHandler} value={input} type="text" placeholder='Search Altcoin..' required />
        <button type='submit'>Search</button>
      </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change (%)</p>
          <p className='marketcap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0,15).map((item, index)=>(
            <Link to={`/coin/${item.id}`}className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0? 
                "green":"red"}>
                {item.price_change_percentage_24h.toFixed(2)}
              </p>
              <p className='marketcap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>

            </Link>
          ))
        }
      </div>
      
    </div>
  )
}

export default Home
