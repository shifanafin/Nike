import React from 'react'
import logo from "../assets/logo.png"
import {MagnifyingGlassCircleIcon,HeartIcon, ShoppingBagIcon} from  "@heroicons/react/24/outline"
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {setOpenCart, cartTotalQuatity} from "../app/CartSlice.js"


const Navbar = () => {
    const totalQuantity = useSelector(cartTotalQuatity)
    const [navState,setNavstate] = useState(false)

    const dispatch = useDispatch()

    const onCartToggle = ()=>{
        dispatch(setOpenCart(
     {cartState : true}
        ))
    }

    const onNavScroll = ()=> {
        if(window.scrollY > 30) 
          {
            setNavstate(true)
        }
        else{

            setNavstate(false)
        }
    }
       

    useEffect(()=>{
        window.addEventListener("scroll",onNavScroll);
        return()=>{
            window.removeEventListener("scroll",onNavScroll)
        }
     
    },[])




  return (
   <>
   <header className={ !navState ? '  absolute top-7 left-0 right-0 opacity-100 z-50 ' : "fixed top-0  left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[500] blur-effect-theme"}>
    <nav className='flex items-center justify-between store-container'>
        <div>
            <img src={logo} 
            alt="logo/img" 
            className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
        </div>
        <ul className='flex items-center justify-center gap-2'>
            <li className='grid items-center'>
                <MagnifyingGlassCircleIcon
                className='icon-style'
                />

            </li>
            <li className='grid items-center'>
                <HeartIcon
                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                
            </li>
            <li className='grid items-center'>
                 <button 
                 type='button'
                 onClick={onCartToggle}
                 className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                    <ShoppingBagIcon
                   className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}
                   />
                  <div  className={`absolute top-4 right-0  w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110
                  transitio-all duration-300 ${navState ? " bg-slate-900 text-slate-100 shadow-slate-900" : " bg-slate-100 text-slate-900 shadow-slate-100"}`}  >
                   
                       {totalQuantity}
                    </div>
                 </button>
            </li>
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Navbar