import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { Action } from '@remix-run/router'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface CounterState {
  count: number
}

// Define the initial state using that type
const initialState: CounterState = {
    count: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
        if(state.count>0){
      state.count -= 1
        }else{
            state.count=0
        }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer