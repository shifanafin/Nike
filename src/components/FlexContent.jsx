import React from 'react'

const FlexContent = ({ifExist,endpoint:{title,heading,text,btn,url,img}}) => {
  return (
    <div>
      <div className={` flex items-center justify-between lg:flex-col lg:justify-center store-container
      ${ifExist? "flex-row-reverse" : "flex-row"}`}>
        <div className='max-w-lg lg:max-w-none w-full md:text-center '>
          <h1 className='text-4xl sm:text-3xl font-bold text-gradient '>{heading}</h1>
          <h1 className='text-5xl lg:text-4xl md:text-3xl  sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
          <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
          <a
          className='flex items-center lg:justify-center'
          target={"_blank"}
          role='button'
          href={url}>
            <button
            className='button-theme bg-slate-900 shadow-slate-900 text-white py-1.5'
             type='button'>{btn}</button>
          </a>

        </div>
        <div className='flex items-center justify-center max-w-xl
        relative lg:max-w-none w-full sm:mt-8 '>
          <img
          src={img}
          alt={`img/${heading}`}
          className={`w-auto object-fill transitions-theme ${ifExist ? "h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12  " : " h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-0 hover:-rotate-12"} `}
          />
        </div>
      </div>
      
    </div>
  )
}

export default FlexContent
