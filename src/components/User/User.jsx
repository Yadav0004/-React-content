import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()

  return (
    <div className='bg-gray-600 text-white text-3xl'>User: {userid} 
   <img src={data.avatar_url} alt="git picture"  width={300} />
    </div>
  )
}

export default User