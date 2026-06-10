import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ToggleButton } from './Contexts/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setThemeModes] = useState("light")

  const darkTheme = () =>{
    setThemeModes("dark")
  }
  const lightTheme = () =>{
    setThemeModes("light")
  }
  
  useEffect (()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ToggleButton.Provider value={{themeMode,darkTheme,lightTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
      </div>
  </div>
  </ToggleButton.Provider>

  )
}

export default App
