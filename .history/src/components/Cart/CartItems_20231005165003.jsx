import React from 'react'
import { MinusIcon,PlusIcon,TrashIcon } from '@heroicons/react/24/outline'

const CartItems = ({item:{id,text,title,img,color,shadow,price,cartQuantity}}) => {
  return (
    <div>
      <div>
        <div>
          <img src={img}
           alt={`img/cart-item/${id}`} />

        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div>
            <button type='button' className='w-5 h-5'><MinusIcon/></button>
            <div>{cartQuantity}</div>
            <button type='button' className='w-5 h-5'><PlusIcon/></button>
          </div>

        </div>

      </div>
      <div>
        <div>
          <h1>{price * cartQuantity}</h1>
        </div>
        <div>
          <button type='button' className='w-5 h-5'><TrashIcon/></button>
        </div>

      </div>
    </div>
  )
}

export default CartItems