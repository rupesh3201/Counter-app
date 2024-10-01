import React from 'react'
// componnent created
// importing  img
import Burger from  './burger.png'
import './App.css'

function App() {
  return (
    <>
    <div className='Holebody' > < h1 className=' Heading'>Burger King </h1>
    <div className='Card'>
      <img src={Burger} className='Product_image' />
      <h1 className='Product_title'> Burgur</h1>
      <p className='Product_disc'>A burger, or hamburger, is a sandwich made of a patty of ground meat placed between two buns. </p>
      <p className='Product_Price'>Price: 99 ₹</p>
      <button className='Buybtn'>Order Now</button>
    </div>
    </div>
    </>

  )
}

export default App