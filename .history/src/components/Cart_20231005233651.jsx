import React from 'react'
import CartCount from './Cart/CartCount'
import CartEmpty from './Cart/CartEmpty'
import CartItems from './Cart/CartItems'
import { useDispatch,useSelector } from 'react-redux'
import {setCloseCart,selectCartstate ,selectCartItems,setClearCart,cartTotalAmount,cartTotalQuatity} from "../app/CartSlice.js"


const Cart = () => {

  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartstate)
  const cartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectCartItems)
  const totalA = useSelector(selectCartItems)

  console.log(cartItems)

  const onCartToggle = ()=>{
      dispatch(setCloseCart(
   {cartState : false}
      ))
  }
  const onClearCart = ()=>{
    dispatch(setClearCart())
  }
  return (
    <>
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[600]
    ${ifCartState ? "opacity-100 visible translate-x-0":"opacity-0 invisible translate-x-8"}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle} onClearCart={onClearCart}/>
      
        {cartItems.length ===  0 ?<CartEmpty onCartToggle={onCartToggle} /> : 
        <div >
          <div className=' overflow-y-scroll h-[81vh] py-5 scroll-smoh scroll-hidden '>
            {cartItems.map((item,i)=>(
              <CartItems
              key={i}
              item={item}/>
            ))
            }
          </div >
          <div className='fixed bottom-0 bg-white pb-4 px-5 grid items-center  gap-y-8 w-full'>
            <div className='flex items-center justify-between '>
              <h1 className='text-base font-semibold uppercase'>Sub Total</h1>
              <h1 className='bg-black rounded text-white w-10 h-6 font-bold  text-center justify-center'>000</h1>
            </div>
            <div className='grid justify-items-center mb-10'>
              <p className='text-2xl font-medium text-center'>
                Shipping will be added
              </p>
              <button type='button' className='button-theme bg-theme-cart text-white'>
                  Check Out
              </button>
            </div>
          </div>
        </div>
        }
        

      </div>
      </div>
      </>
  )
}

export default Cart