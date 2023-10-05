import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"

const initialState = {
    cartState: false ,
    cartItem : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount : 0,
    cartTotalQuatity : 0


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
            toast.success(`${action.payload.title} removed from cart`)

          
            localStorage.setItem('cart',JSON.stringify(state.cartItem))


        },
        setincrement:(state,action)=>{
            const incrementItem = state.cartItem.findIndex((item)=>item.id===action.payload.id)

            if(incrementItem>0){
            state.cartItem[incrementItem].cartQuality +=1
            toast.success(`Item QTY Increased`)
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItem))

        },
        setdecrement:(state,action)=>{
            const decrementItem = state.cartItem.findIndex((item)=>item.id===action.payload.id)

            if(state.cartItem[decrementItem].cartQuality>1){
            state.cartItem[decrementItem].cartQuality -=1
            toast.success(`Item QTY Decreased`)
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItem))

        },
        setClearCart : (state,action)=>{
            state.cartItem = []
            toast.success(`cart cleared`)
            localStorage.setItem('cart',JSON.stringify(state.cartItem))

        },
        setGetTotalAmount : (state,action)=>{

         let {TotalAmount,TotalQuatity}  = state.cartItem.reduce((cartTotal,cartItem)=>{
            const {price,cartQuality} = cartItem;
            const totalPrice =price * cartQuality
            cartTotal.TotalAmount +=  totalPrice
            cartTotal.TotalQuatity +=cartQuality
            return cartTotal
            
         },{
                cartTotalAmount : 0,
                cartTotalQuatity : 0
            })

        }
        state.cartTotalAmount = 


    }

})

export const  {setCloseCart,setOpenCart,setAddItemsToCart,setRemoveItemsFromCart,setincrement,setdecrement,setClearCart} = CartSlice.actions;
export const selectCartstate = (state) =>state.cart.cartState
export const selectCartItems = (state)=>state.cart.cartItem
export default CartSlice.reducer ;


