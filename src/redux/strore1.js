import { configureStore } from '@reduxjs/toolkit'
import valueReducer from './slice/valueSlice'

export const store = configureStore({
  reducer: {
    value:valueReducer
  },
})