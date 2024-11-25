import React from 'react'
import Search from '../Search/Search'
import './Pokenmon.css'
import PokimonList from '../PokimonList/PokimonList'

function Pokemon() {
  return (
    <div className='pokemon-wrapper'>
       {/* <h1 > Pokemon</h1> */}
        <Search/>
        <PokimonList/>
    </div>
  )
}

export default Pokemon