import {configureStore} from '@reduxjs/toolkit';
import {apiSliceCurrent} from "../features/apiSliceCurrent";
import valueReducer from '../redux/slice/valueSlice'

export const store = configureStore({
  reducer: {
    value: valueReducer,
    [apiSliceCurrent.reducerPath]: apiSliceCurrent.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSliceCurrent.middleware)
});
// setInterval(()=>{
//   console.log(store.getState())
// },1500)