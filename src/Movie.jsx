import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Movie = () => {
  
const[title,setTitle]=useState('')
const[data,setData]=useState([''])

const handlechange=(event)=>{
    setTitle(event.target.value)
}
const handlesubmit=async()=>{
    setTitle(title)
    let response=await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=a26f91a7`)
    console.log(response.data.Search,'jyjhgf');
    setData(response.data.Search)
}
console.log(data);
  return (
    <>
    
   <input onChange={handlechange}  type="text"placeholder='Enter title ' />
   <button onClick={handlesubmit}>Search</button>

    <div>
        {data.map((item)=>(
            <>
            <h2>{item.Title}</h2>
            <h2>{item.imdbID}</h2>
            <Link to={`detail/${item.imdbID}`}><img src={item.Poster} alt="" /></Link>
            </>

        ))}
    </div>


   </>

  )
}

export default Movie;