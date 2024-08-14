import { createSlice } from "@reduxjs/toolkit";

const initialState={ 
    value:0,
}
 
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        /**
         * Increment the counter by 1
         * @param {object} state the current state of the counter
         */
        increment:(state) => {
            state.value+=1
        },

        /**
         * Decrement the counter by 1
         * @param {object} state the current state of the counter
         */
        decrement:(state)=>{
            state.value-=1
        }
    }

})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer; 