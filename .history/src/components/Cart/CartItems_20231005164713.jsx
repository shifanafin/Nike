import React from 'react'
import { MinusIcon, } from '@heroicons/react/24/outline'

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
            <button type='button' className=''></button>
          </div>

        </div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default CartItems