import React, { useState } from 'react'

const Items = ({title,text}) => {
    const [toggle,setToggle]=useState(false)
  return (
    <div>
    <button onClick={()=>setToggle(!toggle)}>{title}</button>
    {toggle && <h1>{text}</h1>}
    </div>
  )
}

export default Items