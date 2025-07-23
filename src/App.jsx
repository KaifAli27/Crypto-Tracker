import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Whatif from './pages/What-If/Whatif'
import Portfolio from './pages/Portfolio/Portfolio'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/whatif' element={<Whatif/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App

