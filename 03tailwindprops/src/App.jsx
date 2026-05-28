import { useState } from 'react'
import Cards from './components/Cards.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-500 text-white p-4 mb-4'>Tailwind test</h1>
      <Cards username="John Doe" description="Hello my name is John" />
      <Cards username="John" />

    </>
  )
}
export default App
