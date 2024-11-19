 import React, { useEffect, useState } from 'react';
  import axios from 'axios'
import Pokemonf from '../Pokemon_04/Pokemon';
 function PokimonList() {
    // const [x , setX]=useState(0)
    // const [y , setY]=useState(0)
     // now  how to ge pokemon data

      const [pokemonList, setPokemonList] =useState([]) // this is inital loading

      const [isLoding, setIsLoding]=useState(true)
       const pokeUrl='https://pokeapi.co/api/v2/pokemon'

     async function  downloadPokemons(){
        const response=  await axios.get(pokeUrl); 
        console.log(response.data)
        setIsLoding(false);// this is secoud loading
        //  we itrate on the  result paramenter and access all data or take array of pokemon
        const pokemonResult=response.data.results
        // console.log(response.data)
      const pokemonResultPromis=  pokemonResult.map((pokemon)=>axios.get(pokemon.url)) // this is return new array  itrate on pokemon url using  to create array of promiss downoldoe 20 pokemon

 const pokemonData= await axios.all(pokemonResultPromis) // when all data down lode then axios  give all data  in rray 
     console.log(pokemonData) //this is return all 20 promise list 

      const pokeListResult= setPokemonList(pokemonData.map((pokeData)=>{  // now itreate  on the  data and access all  id  image , name types
        const pokemon=pokeData.data; // this isprint all 20  list in array 
        //   now get in data a data
        return{
            id:pokemon.id,
            name:pokemon.name,
            // other is not  define then use condation
             image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites,
             types:pokemon.types // now can acess all data and  image 
            }
      }
    ))
    console.log(pokeListResult)
    setIsLoding(pokeListResult) 
}
    useEffect(()=>{
       downloadPokemons()
         console.log(" effect called")
    },[])
   


   return (
     <> 

     {/* <div>
   x: {x}
   <button onClick={()=> setX(x+1)}> Inc</button>
     </div>

     <div>
   y: {y} 
   <button onClick={()=> setY(y+1)}> Inc</button>
     </div> */}

 <div className=' pokemon-list-wrapper'>
 <div>Pokimon List</div>
 {/*  this is do if data is loading then print loading otherwise print data loading */}
 {(isLoding)? 'Loading....':pokemonList.map((p)=><Pokemonf name={p.name} image={p.image} key={p.id}/>)} //

 </div>


     </>
   )
 }
 
 export default PokimonList