import { useState , useEffect, useEffectEvent} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodo] = useState([])
    const addTodo = (todo) => {
        setTodo((prev)=>[{id : Date.now(),...todo},...prev])
    }
    const updateTodo = (id , todo) => {
        setTodo((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }
    const deletetodo = (id) => {
        setTodo((prev)=>prev.filter((todo)=> todo.id !== id))
    }
    const togglecomplete = (id) => {
        setTodo((prev)=>prev.map((todo)=> todo.id === id ? {...todo,completed : !todo.completed} : todo))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        if (todos && todos.length > 0) {
             setTodo(todos)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deletetodo,togglecomplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-green-700 ">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo}/>
                            </div>
                        ))}
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App
