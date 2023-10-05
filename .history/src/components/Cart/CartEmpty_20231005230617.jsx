import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid'
import emptybag from '../../assets/emptybag.png'
import React from 'react'

const CartEmpty = ({onCartToggle}) => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img src={emptybag} alt="Empltybag/img"
        className='w-14 lg:w-36 sm:w-26 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <button type='button' className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center 
        text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
            <ArrowDownOnSquareIcon 
            className='w-5 h-5 text-slate-900'/>
            <span className=''>Back To nike Store</span>

        </button>
      </div>
    </div>
  )
}

export default CartEmpty
