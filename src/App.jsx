import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./todolist/cart"
import Todolist from "./orgTodoList/todoList"
import Form from "./form/form"


function App() {
  const count=useSelector((state)=>state.counter.value)
  const name=useSelector((state)=>state.form.name)
//  console.log(name);
  const dispatch=useDispatch()

  return (
    <div>

      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>

        <Todolist/>
        <Form/>
        name:{name}
        <div style={{width:'100px',height:'100px',backgroundColor:name}}></div>
         </div>
  )
}

export default App
