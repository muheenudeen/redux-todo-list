import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./todoslice"
import TodoItem from "./todoItem"


function Todolist(){

    const todos=useSelector((state)=>state.todo.todos)
    const [text,setText]=useState("")
    const dispatch=useDispatch();
    const handleAddTodo = () =>{
        if(text.trim()){
            dispatch(addTodo(text))
            setText('')
        }
    }
    return(
        <>

        <input
        type="text"
        value={text}
        placeholder="enter data"
        onChange={(e)=>setText(e.target.value)}

        
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        
        <ul>
            {todos.map((todo)=>(
              <TodoItem key={todo.id} todo={todo}/> ))}
        </ul>
        </>
    )
}

export default Todolist
