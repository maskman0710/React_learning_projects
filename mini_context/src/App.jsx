import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className="text-3xl font-gray-800 underline">Mini Context</h1>
        <Login />
        <Profile />
         </UserContextProvider>
  )
}

export default App
