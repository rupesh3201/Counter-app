import React, { useState } from 'react'
// componnent created
// importing  img
import Burger from  './burger.png'
import './App.css'
import imgadd from './add.png';
import imgminius from './minus.png';
// import react  { useState } from 'react';

function App() {
  const BurgerPrice = 100;
  const [ Total_Bill , SetBill] = useState( BurgerPrice);
  const [Quantity , SetQuantity ] = useState(1);
  const  UpdateQuantity=(type)=>{
    if(type === "minus" && Quantity >1 ) 
    {
      SetQuantity(Quantity-1);
    }
    else if (type === "plus"  )
    {
      SetQuantity(Quantity+1);
    }

    // Bill
    
  
   
  
  }



  return (
    <>
    <div className='Holebody' > < h1 className=' Heading'>Burger King </h1>
    <div className='Card'>
      <img src={Burger} className='Product_image' />
      <h1 className='Product_title'> Burgur</h1>
      <p className='Product_Price'>Price: {BurgerPrice} ₹</p>
      <p className='Product_disc'>A burger, or hamburger, is a sandwich made of a patty of ground meat placed between two buns. </p>
    
      
      <div className='action_Btns'>
     
      <img src={imgminius} className='Action_btn' alt='imgminus' onClick={()=> UpdateQuantity("minus")}/>
      <p className='Product_Quantity'>{Quantity}</p>
      <img src={imgadd} className='Action_btn' alt='imgplus' onClick={()=> UpdateQuantity("plus")} />
      </div>
      <p className='Total_Price'>Total Bill: { BurgerPrice * Quantity} ₹</p>
      <p className='card_error_msg'>
        {Quantity > 10 ? "Kindly Wait For 10 Min" : null}
      </p>
      <button className='Buybtn'>Order Now</button>
    
    </div>
    </div>
    </>

  )
}

export default App