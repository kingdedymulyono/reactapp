import React from 'react'

const Imgbtn = (prop) => {
    return (
        <button className={prop.classlist} id={prop.id} type={prop.tipe} onClick={prop.btnFunc}>
            <img src={prop.src} alt="" />
            <span>
                {prop.text}
            </span>
        </button>
    )
}

export default Imgbtn