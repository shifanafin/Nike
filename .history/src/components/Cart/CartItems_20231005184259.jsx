import React from 'react'
import { MinusIcon,PlusIcon,TrashIcon } from '@heroicons/react/24/outline'

const CartItems = ({item:{id,text,title,img,color,shadow,price,cartQuality}}) => {
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
          <div className='flex items-center justify-ce gap-5'>
            <button type='button' className='w-5 h-5'><MinusIcon/></button>
            <div>{cartQuality}</div>
            <button type='button' className='w-5 h-5 bg-black text-white'><PlusIcon/></button>
          </div>

        </div>

      </div>
      <div>
        <div>
          <h1>{price * cartQuality}</h1>
        </div>
        <div>
          <button type='button' className='w-5'><TrashIcon/></button>
        </div>

      </div>
    </div>
  )
}

export default CartItems