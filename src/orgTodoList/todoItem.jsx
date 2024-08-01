import { useDispatch } from "react-redux"
import { deleteTodo, toggrleTodo } from "./todoslice"


function TodoItem({todo}){
    const dispatch=useDispatch()
    return(
        <>
        <li>
            <span
            onClick={()=>dispatch(toggrleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
                {todo.text}
            </span>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>delete</button>
        </li>
    
        </>
    )
}

export default TodoItem