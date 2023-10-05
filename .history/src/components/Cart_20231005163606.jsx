import React from 'react'
import CartCount from './Cart/CartCount'
import CartEmpty from './Cart/CartEmpty'
import CartItems from './Cart/CartItems'
import { useDispatch,useSelector } from 'react-redux'
import {setCloseCart,selectCartstate } from "../app/CartSlice.js"


const Cart = () => {

  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartstate)

  const onCartToggle = ()=>{
      dispatch(setCloseCart(
   {cartState : false}
      ))
  }
  return (
    <>
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[600]
    ${ifCartState ? "opacity-100 visible translate-x-0":"opacity-0 invisible translate-x-8"}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle}/>
      
        {CartItems.length ===0 ?   <CartEmpty/> : 
        <div>
          <div>
            <CartItems/>
          </div>
        </div>
        }
        

      </div>
      </div>
      </>
  )
}

export default Cart