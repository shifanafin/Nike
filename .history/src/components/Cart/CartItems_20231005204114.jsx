import React from 'react'
import { MinusIcon,PlusIcon,TrashIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import {setRemoveItemsFromCart} from '../../app/CartSlice.js'


const CartItems = ({item:{id,text,title,img,color,shadow,price,cartQuality}}) => {
  const dispatch = useDispatch()
  const removeItems =()=>{
    dispatch(setRemoveItemsFromCart({id,text,title,img,color,shadow,price,cartQuality}))}
    const quantityAdd = ()=>{
      dispatch(setincrement({id,text,title,img,color,shadow,price,cartQuality}))
    }
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-5' >
        <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3
        hover:scale-105 transition-all duration-75 ease-in-out grid items-center ` }>
          <img src={img}
           alt={`img/cart-item/${id}`} 
           className='w-36 h-auto object-fill lg:w-28'/>

        </div>
        <div className='grid items-center'>
          <div className='grid items-center leading-none'>
            <h1 className='font-medium text-lg lg:text-sm'>{title}</h1>
            <p>{text}</p>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <button
          
             type='button' className='w-5 h-5 rounded bg-black text-white lg:w-4 lg:h-4 active:scale-90'><MinusIcon/></button>
            <div className='text-lg font-bold' >{cartQuality}</div>
            <button 
            onCl
            type='button' className='w-5 h-5 rounded bg-black text-white lg:w-4 lg:h-4 active:scale-90'><PlusIcon/></button>
          </div>

        </div>

      </div>
      <div className='grid items-center gap-5'>
        <div >
          <h1 className='text-lg font-bold '>{price * cartQuality}</h1>
        </div>
        <div>
          <button
            onClick={removeItems} 
           type='button' className='w-5 active:scale-90 cursor-pointer'><TrashIcon/></button>
        </div>

      </div>
    </div>
  )
}

export default CartItems