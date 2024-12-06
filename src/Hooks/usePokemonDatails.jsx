// import React from 'react'
//  import { useState,useEffect } from 'react'
  

// function usePokemonDatails(id, pokemonName) {
//   const [pokemon, setPokemon]= useState({ id, pokemonName})

  
//   async function downloadPokemon() {
//      let  response;
//       if(pokemonName){
//      response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     }
//      else{     response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

//      }
//       const pokemonOfSameTypes= await axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.types?response.data.types[0].name}`)

//     //  console.log(response.data)
//       setPokemon({
// name:response.data.name,
// image: response.data.sprites.other.dream_world.front_default,
// weight:response.data.weight,
// height:response.data.height,
// types:response. data.types.map((t) => t.type.name),
// similarPokemons: pokemonOfSameName.data.pokemon



//       })
//        console.log(response.data.types)
//        setPokemonListState({...pokemonListState,type:response.data.types? response.data.types[0].type.name})

//   }
//    const[pokemonListState,setPokemonListState]=usePokemonList();
  
   

  
//   useEffect(()=>{
//      downloadPokemon()
//      console.log("list",pokemon.types, pokemonListState)
//   },[] )

  
//   return [pokemon]
// }

// export default usePokemonDatails
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Ensure axios is imported

// function usePokemonDetails(id, pokemonName) {
//   const [pokemon, setPokemon] = useState({});
//   const [pokemonListState, setPokemonListState] = usePokemonList(); // Assuming usePokemonList is defined

//   async function downloadPokemon() {
//     try {
//       let response;
//       if (pokemonName) {
//         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//       } else {
//         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       }

//       const types = response.data.types;
//       const firstType = types && types[0]?.type?.name;

//       const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${firstType}`);
      
//       setPokemon({
//         name: response.data.name,
//         image: response.data.sprites.other.dream_world.front_default,
//         weight: response.data.weight,
//         height: response.data.height,
//         types: response.data.types.map((t) => t.type.name),
//         similarPokemons: pokemonOfSameTypes.data.pokemon.map((p) => p.pokemon.name), // Ensure correct mapping
//       });

//       console.log("Types:", response.data.types);
//       setPokemonListState((prev) => ({
//         ...prev,
//         type: firstType,
//       }));
//     } catch (error) {
//       console.error("Error downloading Pokémon:", error);
//     }
//   }

//   useEffect(() => {
//     downloadPokemon();
//   }, [id, pokemonName]); // Add dependencies to avoid missing updates

//   return [pokemon];
// }

// export default usePokemonDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";

function usePokemonDetails(id, pokemonName) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonListState, setPokemonListState] = usePokemonList(); // Assuming usePokemonList is properly implemented

  async function downloadPokemon() {
    try {
      let response;
      if (pokemonName) {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      } else {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }

      if (!response || !response.data) {
        console.error("Invalid API response");
        return;
      }

      const types = response.data.types || [];
      const firstType = types.length > 0 ? types[0]?.type?.name : null;

      let similarPokemons = [];
      if (firstType) {
        const typeResponse = await axios.get(`https://pokeapi.co/api/v2/type/${firstType}`);
        similarPokemons = typeResponse.data.pokemon.map((p) => p.pokemon.name);
      }

      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other?.dream_world?.front_default || response.data.sprites.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: types.map((t) => t.type.name),
        similarPokemons,
      });

      setPokemonListState((prev) => ({
        ...prev,
        type: firstType,
      }));
    } catch (error) {
      console.error("Error downloading Pokémon:", error);
    }
  }

  useEffect(() => {
    if (id || pokemonName) {
      downloadPokemon();
    }
  }, [id, pokemonName]);

  return [pokemon];
}

export default usePokemonDetails;
