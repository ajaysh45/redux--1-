// import React from 'react'
import { useSelector,useDispatch,  } from 'react-redux'
import { increment,decrement,incrementByAmount } from './counterSlice'
import counterSlice from './counterSlice'

const Counter = () => {
    const count =useSelector((state : any) => state.counterState.count)
const dispatch=useDispatch()
  return (
    <div>
          <button className='button' aria-label='Increment value' 
      onClick={() => {dispatch(increment())}} > + </button>

      <span className='value'> Count: {count} </span>

      <button className='button'  
      onClick={() => {dispatch( incrementByAmount(2))}} > Increament By 2 </button>
<button className='button' aria-label='Decrement value' 
      onClick={() => {dispatch(decrement())}} > - </button>
    </div>
  )
}

export default Counter

function dispatch(arg0: { payload: undefined; type: string }) {
  throw new Error('Function not implemented.')

}