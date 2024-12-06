//  function useDebounce(cb,delay=2000){ // it id expected on one argument and callback
//  let timeid; //  this variable is store  of the  element  whatever we search 
//  return(...args)=>{ //  now makeing one modifiy  callback  add all variable and argument  whats comes

//      clearTimeout(timeid)
//      timeid=setTimeout(()=>{
// cb(...arguments)// this is the callback all again 
//      },delay)
//  }
 
//  }
//   export default useDebounce
// // this is the debounceof and it is delay  when we ar searching  ak particular key or object in input box  
import { useRef } from 'react';

export default function useDebounce(callback, delay = 5000) {
    const timeoutRef = useRef(null);

    return (...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
