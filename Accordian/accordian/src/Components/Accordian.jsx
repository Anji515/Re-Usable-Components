import React from 'react'
import Items from './Items'

const Accordian = ({items}) => {
  return (
    <div>
        {items?.map((el)=>(
         <Items key={el.id} {...el}/>
        ))}
    </div>
  )
}

export default Accordian