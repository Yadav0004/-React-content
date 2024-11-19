import React from 'react'
//  exapet a imae and name
function Pokemonf({name, image}) {

  return (
    <>
        <div>{name}</div>
        <div> <img src={image}/></div>
    </>
    
  )
}

export default Pokemonf