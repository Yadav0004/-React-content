import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
      fetch('https://github.com/Yadav0004')
      .then(response=>response.json())
 .then(data=>{
    console.log(data);
    setData(data)
 })

    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-3 text-3xl'>Github followers: {data.followers} 
       <img src={data.avatar_url} alt="git picture"  width={400} />

    </div>
  )
}

export default Github