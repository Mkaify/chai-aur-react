import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect( ()=> {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])

  return (
    <div className='text-white text-3xl bg-gray-600 p-4 text-center'>
      Github Follower {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
