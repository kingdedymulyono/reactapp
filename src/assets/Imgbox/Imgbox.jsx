import React from 'react'
import Grid from '../Grid/Grid'
import Image from '../Image/Image'
//school
import smk1 from '../../../public/smkn1.jpg'
import logosmk1 from '../../../public/logosmk1.png'
import logorpl from '../../../public/rpl.png'
//hpbby
import shinkai from '../../../public/FILMS.jpg'
import dedyas from '../../../public/dedyas.jpg'
import HYPE from '../../../public/HYPE.jpg'


//Fav

import suzume from '../../../public/suzume.jpg'
import kaguya from '../../../public/kaguya.jpg'
import cars from '../../../public/carsoutside.jpeg'

import "./Imgbox.css"
const Imgbox = (prop) => {
    let imgSrc=[]
    if(prop.c=='school'){
        imgSrc=[smk1,logosmk1,logorpl];

    }else if(prop.c=='hobby'){
        imgSrc=[shinkai,dedyas,HYPE];
    }else if(prop.c=='fav'){
        imgSrc=[suzume,kaguya,cars];
    }
    return (
        <div className='bg-light p-2 py-4 rounded-3 mb-2'>
            <Grid>
                <div className="
                p-2 bg-white shadow rounded-3 d-flex justify-content-center col-4">
                    <Image classlist="txtImg" src={imgSrc[0]}/>
                </div>
                <div className="
                p-2 bg-white shadow rounded-3 d-flex justify-content-center col-3">
                    <Image classlist="txtImg" src={imgSrc[1]}/>
                </div>
                <div className="
                p-2 bg-white shadow rounded-3 d-flex justify-content-center col-3">
                    <Image classlist="txtImg" src={imgSrc[2]}/>
                </div>
            </Grid>
        </div>
    )
}

export default Imgbox