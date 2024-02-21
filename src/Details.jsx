import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'



const Details = () => {
    const {id}=useParams()
    console.log(id);
    const[data,setData]=useState('')

    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=a26f91a7`)
            console.log(response);
            setData(response.data)
        }
        fetchdata()
    },[])

  return (
    <div>

       <h1> {data.Title}</h1>
       <h1> {data.Actors}</h1>
       <h1> {data.Year}</h1>
       <img src={data.Poster} alt="" />

        
    </div>
  )
}

export default Details