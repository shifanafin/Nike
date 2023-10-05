import React from 'react'

const Footer = ({footerAPI:{titles,links}}) => {
  return (
    <>
    <footer className='bg-theme pt-7 pb-5 '>
        <div className='store-container text-slate-200 '>
            <div className='grid items-start  grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 '>
              {titles.map((val,i)=>(
                <div key={i}
                className='grid items-center '
                >
                <h1
                className='text-lg lg:text-base md:text-sm uppercase font-semibold'
                >{val.title}</h1>
                     
                </div>
              ))}
              {links.map((list,i)=>(
                <ul
                className='grid items-center gap-1'
                key={i}>
                   {list.map((val,i)=>(
                    <li
                    className='text-sm  sm:text-xs'
                    key={i}
                    >
                        {val.link}
                    </li>

                   ))}
                </ul>
              ))}
            </div>
            <div className='text-center'>
              copy Right
            </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
