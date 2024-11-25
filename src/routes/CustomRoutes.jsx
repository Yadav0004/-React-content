import React from 'react'
 import { Route, Routes } from 'react-router-dom'
import Pokemon from '../Comonent/Pokemon/pokemon'
import PokimonDetails from '../Comonent/PokemonDetails/PokimonDetails'
function CustomRoutes() {
  return (
    //  this routes component take bunch of code ex=: routes  ke andar route pass kar dega  which is pass set of routes

    <Routes>
     {/* this route define which path which compnent is run  or datayega kon sa component render hoga */}
<Route path="/" element={<Pokemon/>} />
<Route path="/pokemon/:id"  element={<PokimonDetails/>}  />
    </Routes>
  )
}

export default CustomRoutes