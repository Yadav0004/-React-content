// import React from 'react'
// import { useState } from 'react';
// import './Search.css'
// import useDebounce from '../../Hooks/useDebounce';


// function Search({updateSearchTerm}) {
//   //  first mantain  Satat variable  after updateSerchterm  not need to  make State
//   //  const [searchTerm, setSerchTerm]=useState('');
//    const debouncecallback=useDebounce((e)=>updateSearchTerm(e.target.value))
//   return (
//     <div className='search-wrapper'>
//     <input
//         id='pokemon-name-search'
//         type='text'
//         placeholder='pokemon name...'
//         // onChange={(e)=>updateSearchTerm(e.target.value)}
//         onChange={debouncecallback}  
//         // use this debounce and add dealy useDedounce hook
//     />
    
//     </div>
//   )
// }

// export default Search
import React from 'react';
import './Search.css';
import useDebounce from '../../Hooks/useDebounce';

function Search({ updateSearchTerm }) {
    // Debounce callback with delay of 300ms (or customize it)
    const debouncecallback = useDebounce((value) => updateSearchTerm(value), 1000);

    // Handle input change
    const handleChange = (e) => {
        debouncecallback(e.target.value); // Pass only the value, not the event
    };

    return (
        <div className='search-wrapper'>
            <input
                id='pokemon-name-search'
                type='text'
                placeholder='pokemon name...'
                onChange={handleChange} // Use the debounced handler
            />
        </div>
    );
}

export default Search;
