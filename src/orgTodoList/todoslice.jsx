import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
    addTodo:(state,action)=>{
        state.todos.push({id:Date.now(), text: action.payload, completed:false})
   },
   toggrleTodo:(state,action)=>{
    state.todos.find((todo)=>todo.id === action.payload)
    if(todo){
        todo.completed =! todo.completed
    }
   },
   deleteTodo:(state,action)=>{
    state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

   }
}

})

export const {toggrleTodo, addTodo, deleteTodo}=todoSlice.actions
export default todoSlice.reducer