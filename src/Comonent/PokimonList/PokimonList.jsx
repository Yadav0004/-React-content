 import React, { useEffect, useState } from 'react';
  import axios from 'axios'
import Pokemonf from '../Pokemon_04/Pokemon';
import './PolemonList.css'
 function PokimonList() {
    // const [x , setX]=useState(0)
    // const [y , setY]=useState(0)
     // now  how to ge pokemon data

      // const [pokemonList, setPokemonList] =useState([]) // this is inital loading

      // const [isLoding, setIsLoding]=useState(true)

      //  const [pokedexUrl,setPokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon')

      //  const [nextUrl, setNextUrl]= useState('')
      //  const[prevUrl,setPrevUrl]=useState('')

//  mantaning multiple State  and this modimaction after pokideatails file
 const[pokemonListState, setPokemonListState]=useState({
   pokemonList:[],
   isLoding:true,
   pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
   nextUrl:'',
   prevUrl:''

 })

     async function  downloadPokemons(){
      //  this is stop when  we  clcick on  next then  not rerender  do setIsLoading (true) ad ye download kar lega aur  imaddite render hoga
      setPokemonListState({...pokemonListState,isLoding:true}) 
      // abov line return object as it return all pokemon value spread operator use karne par shabi pure value unpack ho jayege is new object aayejayege
      //  isloading  ko  override karege  
        const response=  await axios.get(pokemonListState.pokedexUrl);
        // now here use pokemonlistate.pokdexurl 
        console.log(response.data ," mai  hi nahi chal raha hu")
      //  / setIsLoding(false);// this is secoud loading
        //  we itrate on the  result paramenter and access all data or take array of pokemon
        const pokemonResult=response.data.results

        // console.log(response.data)
        // this is set next prev url 
console.log(response.data) // by  help of this given belwo   3 line  do next and prve
setPokemonListState((state)=>({...state, // this is also handel multiple state
  nextUrl:response.data.next,
  pokedexUrl:response.data.previous}))
// un pake and next url overwirte respons.data value se seturl and nexturl ko do bar likhane ki jarurat nahi hai 
// setPrevUrl(response.data.previous)
      const pokemonResultPromis=  pokemonResult.map((pokemon)=>axios.get(pokemon.url)) // this is return new array  itrate on pokemon url using  to create array of promiss downoldoe 20 pokemon

 const pokemonData= await axios.all(pokemonResultPromis) // when all data down lode then axios  give all data  in rray 
     console.log(pokemonData) //this is return all 20 promise list 

      const pokeListResult= pokemonData.map((pokeData)=>{  // now itreate  on the  data and access all  id  image , name types
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
    )
    console.log(pokeListResult)
    setPokemonListState((state)=>({...state, // this  line is take a object state and  mantaing multiple same state leteste new become value return 
      pokemonList:pokeListResult 
      ,isLoding:false}))
    // setIsLoding(pokeListResult) 
}
    useEffect(()=>{
       downloadPokemons()
         console.log(" effect called")
    },[pokemonListState.pokedexUrl])
    // jab bhi  hum next and prev button par click karege to  change hoga to humara useeffect 


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

 <div className='pokemon-list-wrapper'>
 
 {/*  this is do if data is loading then print loading otherwise print data loading */}
 <div  className='pokemon-wrapper'> {(pokemonListState.isLoding)? 'Loading....':pokemonListState.pokemonList.map((p)=><Pokemonf name={p.name} image={p.image} key={p.id} id={p.id} />)} 
</div>
<div className='control'>
   <button disabled={pokemonListState.prevUrl== null}  onClick={()=>setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})}>Prev</button>
   <button disabled={pokemonListState.nextUrl==null} onClick={()=>setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})} > Next</button> 
   {/*  now here add check proparty if desiable proparty   prev undefine  and upadate */}

</div>
 </div>


     </>
   )
 }
 
 export default PokimonList