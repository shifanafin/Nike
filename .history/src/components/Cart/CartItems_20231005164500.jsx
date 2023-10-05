import React from 'react'

const CartItems = ({item:{id,text,title,img,color,shadow,price,cartQuantity}}) => {
  return (
    <div>
      <div>
        <div>
          <img src={img}
           alt={`img/cart-item/`} />

        </div>
        <div>

        </div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default CartItems