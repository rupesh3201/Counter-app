import React from 'react'
// componnent created
// importing  img
import Burger from  './burger.png'
import './App.css'

function App() {
  return (
    <>
    <div className='Holebody' > < h1 className=' Heading'>Burger King </h1>
    <div>
      <img src={Burger} className='Product_image' />
    </div>
    </div>
    </>

  )
}

export default App