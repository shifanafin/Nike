import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"

const initialState = {
    cartState: false ,
    cartItem : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

}

const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers : {
        setOpenCart : (state,action)=>
        {
            state.cartState = action.payload.cartState
              
        },
        setCloseCart :(state,action)=>{
            state.cartState = action.payload.cartState


        },
        setAddItemsToCart :(state,action)=>{

            const itemIndex = state.cartItem.findIndex((item)=>item.id ===action.payload.id)

            if (itemIndex>=0){
                state.cartItem[itemIndex].cartQuality +=1;
                toast.success(`Item QTY Increased`)
            }
            else{
                const temp = {...action.payload, cartQuality:1}
                state.cartItem.push(temp)
            
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItem))
          
        },
        setRemoveItemsFromCart : (state,action)=>{
            const removeItem = state.cartItem.filter((item)=>item.id !==action.payload.id)
            state.cartItem = removeItem
            localStorage.setItem('cart',JSON.stringify(state.cartItem))
            toast.success(`${action.payload.title} removed from cart`)

        },
        setincrement:(state,a)


    }

})

export const  {setCloseCart,setOpenCart,setAddItemsToCart,setRemoveItemsFromCart} = CartSlice.actions;
export const selectCartstate = (state) =>state.cart.cartState
export const selectCartItems = (state)=>state.cart.cartItem
export default CartSlice.reducer ;


