import React from 'react'
import imgJson from "./img.json"
import "./Carousel.css"
const Carousel = () => {
    // console.log(imgJson)
    return (

        <div data-aos="fade-up" data-aos-delay="200" className='d-flex gap-2 align-items-center'>
        <span id='leftShadow'>
        </span>
        {imgJson.img.map((item)=>{
            return(
                <img className='infiniMage rounded shadow  w-25' src={`../../../public/photos/${item}`} alt="" />
            )
        })}
        {imgJson.img.map((item)=>{
            return(
                <img className='infiniMage rounded shadow  w-25' src={`../../../public/photos/${item}`} alt="" />
            )
        })}
        <span id='rightShadow'>
        </span>
        </div>
    )
}

export default Carousel