import { useState } from "react";
import "./App.css";
import {AiFillPlusCircle} from "react-icons/ai"
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

const App =()=> {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([])

  const handleInput =(event) => {
    setInputValue(prevInput=> (prevInput, event.target.value) )
  }

  const handleDelete =(id) =>{
    setTodo(prevTodo => prevTodo.filter((obj)=> obj.props.id != id))
  }

  const handleEnter = (event) => {
    if(event.key === "Enter"){
      addTodo()
    }
  }

  const toggleCompleted = (id) => {
    setTodo(prevTodo => {
      return prevTodo.map(obj => {
        if (obj.props.id === id) {
          return {
            ...obj,
            props: {
              ...obj.props,
              complete: !obj.props.complete
            }
          }
        }
        return obj
      })
    })
  }
    
  const addTodo = () =>{
    if(inputValue.trim() === ""){
      return
    }  
    setInputValue("")
    return(
      todo.unshift(<Todo id={nanoid()} handleDel={handleDelete} complete={false} check={toggleCompleted}>{inputValue}</Todo>)
    )
  }
  
  return (
    <div className="flex justify-center flex-col items-center mt-32">
      <h1 className="text-[10rem] font-bold text-gray-200">todos</h1>
      <div className="w-[32rem] h-10 rounded-full shadow-lg shadow-gray-300 items-center px-5 flex justify-between">
        <input type="text" onChange={handleInput} onKeyDown={handleEnter} placeholder="Add todo..." value={inputValue} className="w-96 h-full outline-none placeholder:text-black" />
        <AiFillPlusCircle className="text-green-700 text-2xl cursor-pointer" onClick={addTodo} />
      </div>
      <div className="">
        {todo.map((item,index)=>(
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
