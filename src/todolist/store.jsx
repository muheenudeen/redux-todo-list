
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../todolist/cart' 
import todoslice from "../orgTodoList/todoslice";
import formSlice from '../form/formSlice';

const store = configureStore({
    reducer:{
        counter:counterSlice,
         todo:todoslice,
         form:formSlice,
    },
    
})

export default store