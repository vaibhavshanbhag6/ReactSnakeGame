import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function SnakeFood() {
  const foodpos = useSelector((state) => state.foodposition);
    
    useEffect(()=>{
    },[])

  return (
    <div>
    <div className='snake-food' style={{top: `${foodpos[0]}%`, left: `${foodpos[1]}%`}}>
    </div></div>
  )
}

export default SnakeFood