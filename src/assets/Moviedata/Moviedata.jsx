import React from 'react'
import { useState , useEffect } from 'react'

const Moviedata = (prop) => {
    const [itemData,setData] = useState([]);
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=c71eb3df&i=${prop.id}`)
        .then(response=>response.json())
        .then(data=>setData(data))
    },[prop.id])
    console.log(itemData.Plot)
  return (
    <>
        <p className='text-secondary fw-light'>{itemData.Plot}</p>
        <span>Director : {itemData.Director}  </span><br />
        <span>writer : {itemData.Writer} </span><br />
        <span>Stars : {itemData.Actors} </span><br />
        <br />
    </>
  )
}

export default Moviedata