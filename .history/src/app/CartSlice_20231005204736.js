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
            
            if (itemIndex>=0){
            const removeItem = state.cartItem.filter((item)=>item.id !==action.payload.id)
            state.cartItem = removeItem
            toast.success(`${action.payload.title} removed from cart`)

            }
            localStorage.setItem('cart',JSON.stringify(state.cartItem))


        },
        setincrement:(state,action)=>{
            if(inde\)
            const incrementItem = state.cartItem.findIndex((item)=>item.id===action.payload.id)
            state.cartItem[incrementItem].cartQuality +=1
            localStorage.setItem('cart',JSON.stringify(state.cartItem))
            toast.success(`Item QTY Increased`)

        },
        setdecrement:(state,action)=>{
            const incrementItem = state.cartItem.findIndex((item)=>item.id===action.payload.id)
            state.cartItem[incrementItem].cartQuality -=1
            localStorage.setItem('cart',JSON.stringify(state.cartItem))
            toast.success(`Item QTY Decreased`)

        }


    }

})

export const  {setCloseCart,setOpenCart,setAddItemsToCart,setRemoveItemsFromCart,setincrement,setdecrement} = CartSlice.actions;
export const selectCartstate = (state) =>state.cart.cartState
export const selectCartItems = (state)=>state.cart.cartItem
export default CartSlice.reducer ;


