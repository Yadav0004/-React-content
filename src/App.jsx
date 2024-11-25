import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './Comonent/Pokemon/pokemon'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokedex'>
      {/* <Pokemon/> */}
      <h1 id ="pokedex-heading" >
      <Link to="/">Pokenmon</Link> 
      {/*  */}

       </h1>
      <CustomRoutes/>
      
    </div>
  )
}

export default App
