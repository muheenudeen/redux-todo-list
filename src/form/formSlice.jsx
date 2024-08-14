import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"red",
}

const formSlice=createSlice({
    name:"mueen",
    initialState,
    reducers:{
        /**
         * Reducer function for the 'submit' action.
         * Updates the 'name' property of the state with the value from the payload.
         *
         * @param {Object} state - The current state.
         * @param {Object} action - The action object.
         * @param {string} action.payload.name - The new name value.
         * @return {void} This function does not return anything.
         */
        submit: (state, action) => {
            // Update the 'name' property of the state with the value from the payload

            // Log the name value from the payload (commented out for production)
            // console.log(action.payload.name);

            // Update the 'name' property of the state
            state.name = action.payload.name;
        }
    }
})

export default formSlice.reducer
export const {submit}=formSlice.actions