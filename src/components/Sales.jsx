import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({ifExist,endpoint:{title,items}}) => {
  return (
    <div className='store-container '>
      <Title 
      title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExist ? "grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 " : "  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"}`}>
        {items?.map((item,i)=>(
              <Item
              key={i}
            {...item}
            ifExist={ifExist}
              />
        ))}
    
      </div>
      
    </div>
  )
}

export default Sales
