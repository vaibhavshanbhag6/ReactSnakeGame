import React from 'react'
import { useSelector } from 'react-redux';



function Snake() {

  const snakepos = useSelector((state)=> state.snakemove);

  return (
    <div>
    {snakepos.map((val,i)=>{
        return <div className='snake' key={i} style={{top: `${val[0]}%`, left: `${val[1]}%`}}></div>
    })}
    
    </div>
  )
}

export default Snake