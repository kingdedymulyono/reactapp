import React from 'react'
import Button from '../Button/Button'
import Imgbox from '../Imgbox/Imgbox'
const Txt = (prop) => {
  if(prop.img){
    console.log(prop.c)
    return(
      <div className={prop.classlist}>
        <Imgbox c={prop.c}/>
        <span className=''>{prop.teks}</span><br />
    </div>
    )
    
  }
  return (
    <div className={prop.classlist}>
        <span className=''>{prop.teks}</span><br />
    </div>
  )
}

export default Txt