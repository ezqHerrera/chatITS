import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarraNav from './components/BarraNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BarraNav/>
    </>
  )
}

export default App
