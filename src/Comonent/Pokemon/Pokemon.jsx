import React, { useEffect } from 'react'
 import {useState} from 'react'
import Search from '../Search/Search'
import './Pokenmon.css'
import PokimonList from '../PokimonList/PokimonList'
import PokimonDetails from '../PokemonDetails/PokimonDetails'
function Pokemon() {
  //  jo bhi search ho  o yaha  par propogate ho 
   const [serchTerm, setSerachTerm]=useState('')
    useEffect(()=>{

    }, [serchTerm])
  return (
    <div className='pokemon-wrapper'>
       {/* <h1 > Pokemon</h1> */}
        <Search updateSearchTerm={setSerachTerm}
          // this is call back
        />
        
{/*   here we run condatinol rendering  aur is serchterm ke basiscs  par hum pokimom ke datil ko laye 
  if lenght is */}
        { (!serchTerm)?<PokimonList/>:<PokimonDetails  key={serchTerm}  PokemonName={serchTerm}/>}
        {/*   befor  the pkemon  search is the null  <PokemonDetails/> use the now can get pkemon list details
         and it is  expected on  paramenter   now lenght is zero  we re renter
          use key for rerender  not only list  use this  rather  when ever want to  render then use this    */}
    </div>
  )
}

export default Pokemon