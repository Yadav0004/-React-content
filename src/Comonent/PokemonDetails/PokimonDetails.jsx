// //  this  file purpous  is it is tell all about each pokemon  and his funcanality  
//  import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// //   1st  instal react  router dom  16.51 minute
//  import  './PokemonDetails.css'

//  function PokimonDetails({PokemonName}) {
//   const {id}= useParams()
//   //  here put  the empty object
//   // during the  usePokemondatils Hook  pass  id and  pokemonName both  
//   const [pokemon, setPokemon]= useState({ id, PokemonName})
//    console .log( id)

  
//   async function downloadPokemon() {
//     //  how  downlode  pokemon  id
//     const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//      console.log(response.data)
//     //  jase hi  hamare pass data aayega to hum se pokimon 
//       setPokemon({
// name:response.data.name,
// image: response.data.sprites.other.dream_world.front_default,
// weight:response.data.weight,
// height:response.data.height,
// types:response. data.types.map((t) => t.type.name),


//       })
   
//   }
  
   

  
//   useEffect(()=>{
//      downloadPokemon()
//   },[] )

  
//    return (
// // hhum chahate hai jase hi datils page open  ak  id fetech kare  fetech karene ke baad  use effect ka andar ak api axios laga sakate hai 
 
//      <div className='pokemon-details-wrapper'>
//           <img className='pokemon-image' src={pokemon.image}/>

//      <div className='pokemon-name'>  <span>  {pokemon.name}</span>
//      <div  className='pokemon-name'> <span>height:{pokemon.height}</span> </div>
//      <div className='pokemon-name'> <span>weight:{pokemon.weight}</span></div>
//      <div className="pokemon-types">
      
//          { pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
       
//       </div>
// </div>
//       </div>

//    )
//  }
 
//  export default PokimonDetails
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';

function PokemonDetails({ PokemonName }) {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    weight: '',
    height: '',
    types: [],
  });

  console.log('Pokemon ID:', id);

  // Fetch Pokémon data based on ID or Name
  async function downloadPokemon() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id || PokemonName}`);
      console.log('Response Data:', response.data);

      // Set Pokémon details in state
      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),
      });
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  }

  // Fetch data when component mounts
  useEffect(() => {
    downloadPokemon();
  }, [id, PokemonName]); // Add dependencies for dynamic fetching

  return (
    <div className="pokemon-details-wrapper">
      {/* Pokémon Image */}
      {pokemon.image && <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />}

      {/* Pokémon Details */}
      <div className="pokemon-details">
        <h1 className="pokemon-name">Name: {pokemon.name}</h1>
        <div className="pokemon-info">
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>

        {/* Pokémon Types */}
        <div className="pokemon-types">
          <h3>Types:</h3>
          {pokemon.types.map((t) => (
            <div key={t} className="pokemon-type">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
