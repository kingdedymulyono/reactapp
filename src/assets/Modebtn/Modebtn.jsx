import React from 'react'
import Button from '../Button/Button'
import { useState } from 'react'
import { faSun , faMoon } from '@fortawesome/free-solid-svg-icons'
import "./Modebtn.css"
const Modebtn = () => {
    const [mode,setMode] = useState(true);
    const handleLight = () => {
        setMode(false);
        document.body.style.backgroundColor='black';
        document.body.style.backgroundImage='url("../public/bgblack.svg")';
        document.body.style.backgroundSize='cover'
        document.body.style.color='white'
    }
    const handleBlack = () => {
        setMode(true);
        document.body.style.backgroundColor='';
        document.body.style.backgroundImage='';
        document.body.style.backgroundSize=''
        document.body.style.color=''
        
    }
    if(mode){
        return(
            <Button classlist="modeBtn d-flex align-items-center flex-row rounded-pill btn btn-light border border-dark" btnFunc={()=>{handleLight()}} text="Light" icon={faSun}/>
        )
    }
    if(!mode){
        return(
            <Button classlist="modeBtn d-flex align-items-center flex-row-reverse rounded-pill btn btn-dark border border-dark" btnFunc={()=>{handleBlack()}} text="Black" icon={faMoon}/>
        )
    }
//   return (
//     // <div>Modebtn</div>
//   )
}

export default Modebtn