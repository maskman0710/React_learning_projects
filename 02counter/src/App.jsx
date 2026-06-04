import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  const addvalue = () => {
    if (counter == 20) {
      stop
    }
    else {
      setCount(counter + 1)
    }

  }
  const remove = () => {
    if (counter == 0) {
      stop
    }
    else {
      setCount(counter - 1)
    }
  }
  return (
    <>
      <h1>this is my second React project</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addvalue}>add value</button>
      <button onClick={remove}>Remove value</button>
    </>
  )
}

export default App
