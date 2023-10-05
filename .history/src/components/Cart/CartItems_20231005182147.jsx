import React from 'react'
import { MinusIcon,PlusIcon,TrashIcon } from '@heroicons/react/24/outline'

const CartItems = ({item:{id,text,title,img,color,shadow,price,cartQuality}}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-5' >
        <div >
          <img src={img}
           alt={`img/cart-item/${id}`} 
           className='w-36 h-auto object-fill lg:w-28'/>

        </div>
        <div className='flex-col items-center justify-center'>
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className='flex items-center ju gap-5'>
            <button type='button' className='w-5 h-5'><MinusIcon/></button>
            <div>{cartQuality}</div>
            <button type='button' className='w-5 h-5'><PlusIcon/></button>
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