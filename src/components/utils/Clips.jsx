import React from 'react'
import {PlayIcon} from "@heroicons/react/24/solid"

const Clips = ({clip,imgsrc}) => {
  return (
    <div>
        <div  className='relative h-28 w-32 rounded-xl overflow-hidden group
        cursor-pointer transition-all duration-300 xl:w-32
         lg:w-28 md:w-24 sm:w-16 xl:h-28 lg:h-24 md:h-20 sm:h-14'>
            <img
            src={imgsrc}
            alt='clips-vedio'
            className='absolute inset-0 flex h-full w-full object-cover top-0 left-0 right-0 rounded-xl
            opacity-100 z-10 transition-opacity duration-500'/>
            <div className=' absolute bg-white blur-effect-theme  
            left-11 right-0 top-11 lg:left-9 lg:top-8 opacity-100 z-[100]
             w-8 h-8 md:w-5 md:h-5 flex items-center justify-items-center sm:top-4 sm:left-5
             item-center rounded-full '>
                <PlayIcon 
                className=' icon-style xl:w-8  md:w-5 md:h-3 text-slate-900'/>
            </div>
           <video
           autoPlay={true}
           loop={true}
           muted={true}
           playsInline={true}
           className='absolute top-0 left-0 right-0 flex h-full w-full object-cover
           opacity-0 z-50 group-hover:opacity-100 group-hover:z-20 rounded-xl '>
            <source  type='video/mp4' src={clip}
            />
           </video>
        </div>
      
    </div>
  )
}

export default Clips
