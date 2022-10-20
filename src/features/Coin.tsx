import { useSelector } from 'react-redux'
import React from 'react'

const Coin = () => {
    const count =useSelector((state : any) => state.counterState.count)
  return (
    <div>
        <span className='value'> Coin: {count} </span>
    </div>
  )
}

export default Coin
