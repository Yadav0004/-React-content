import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './Comonent/Pokemon/pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon/>
    </>
  )
}

export default App
