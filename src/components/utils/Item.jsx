import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import {setAddItemsToCart,setOpenCart} from "../../app/CartSlice.js"

const Item = ({
  ifExist,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {

  const dispatch = useDispatch();

  const onAddToCart = ()=>{
    const item = {id,title,text,img,color,shadow,price}
    dispatch(setAddItemsToCart(item))
  }

  const onCartToggle = ()=>{
    dispatch(setOpenCart(
 {cartState : true}
    ))
}

  return (
    <div
      className={`relative ${color} ${shadow} ${
        ifExist ? "justify-items-start" : " justify-items-center"
      } bg-gradient-to-b grid items-center
    rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full
    hover:scale-105`}
    >
      <div className={`grid items-center justify-items-center   ${
        ifExist ? "justify-items-start" : " justify-items-center"
      } `}>
        <h1
          className="text-slate-200 text-xl lg:text-lg md:text-base
            font-medium filter drop-shadow"
        >
          {title}
        </h1>
        <p
          className="text-slate-200
            filter drop-shadow text-base md:text-sm font-normal"
        >
          {text}
        </p>

        <div className="flex items-center justify-items-center justify-between w-28 my-2">
          <div className="flex items-center justify-items-center bg-white/80 px-1 rounded blur-effect-theme">
            <h1 className="text-black text-sm font-medium"> ₹‎{price}</h1>
          </div>
          <div className="flex items-center justify-items-center   px-1 rounded">
            <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1>
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4 " />
          </div>
        </div>
        <div className="flex items-center justify-items-center gap-3 ">
          <button
          onClick={()=>onAddToCart()}
            type="button"
            className="bg-white opacity-90 blur-effect-theme button-theme p-0.5
                shadow shadow-sky-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
          onClick={()=>{onCartToggle() ; onAddToCart()}}
            type="button"
            className="bg-white opacity-90 blur-effect-theme button-theme p-2
                shadow shadow-sky-200 text-sm text-black "
          >
            {btn}
          </button>
        </div>
      </div>
      <div className={`flex items-center ${ifExist ?"absolute top-5 right-0":"justify-center"}`}>
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className={` transitions-theme hover:-rotate-12 ${ifExist ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]":"h-36 w-64"}`}
        />
      </div>
    </div>
  );
};

export default Item;