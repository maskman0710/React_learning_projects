import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
<<<<<<< HEAD
import { TodoProvider } from './context'
import './App.css'

function App() {
  const [todos, setTodo] = useState([])
    const addTodo = (todo) => {
        setTodo((prev)=>[{id : Date.now(),...todo},...prev])
    }
    const updateTodo = (id , todo) => {
        setTodo((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }
    const deleteTodo = () => {}
    const togglecomplete = () => {}
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deletetodo,togglecomplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-green-700 ">Manage Your Todos</h1>
=======
import './App.css'

function App() {
  const [todo, settodo] = useState([])

  return (
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
>>>>>>> a7e35a2eb8bbab93b8c1372c23714dcfb6063852
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            </TodoProvider>
=======
>>>>>>> a7e35a2eb8bbab93b8c1372c23714dcfb6063852
  )
}

export default App
