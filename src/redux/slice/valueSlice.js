import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  firstValue: '',
  secondValue: '',
  checkedId1:0,
  checkedId2:0,
  arr:[]
}

export const value = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setFirstValue(state, action) {
        state.firstValue = action.payload
    },
    setSecondValue(state, action) {
      state.secondValue = action.payload
    },
    setFirstChecked(state, action) {
      state.checkedId1 = action.payload
    },
    setSecondChecked(state, action) {
      state.checkedId2 = action.payload
    },
    addArr(state,action){
      state.arr.push(action.payload)
    }

  },
})

export const {addArr,setFirstValue, setSecondValue , setFirstChecked, setSecondChecked} = value.actions

export default value.reducer