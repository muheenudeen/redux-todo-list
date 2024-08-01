import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"red",
}

const formSlice=createSlice({
    name:"mueen",
    initialState,
    reducers:{
        submit:(state,action)=>{
            // console.log(action.payload.name);
            state.name=action.payload.name
        }
    }
})

export default formSlice.reducer
export const {submit}=formSlice.actions