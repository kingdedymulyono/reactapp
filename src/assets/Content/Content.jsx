import React from 'react'
import "./Content.css"
import ppdedyas from "./ppdedyas.jpg"
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import html from "../html.png"
// import css from "../css.png"
// import js from "../js.png"
// import php from "../php.png"
// import xampp from "../xampp.png"
// import Box from '../box/box'
import Txt from '../Txt/Txt'
import Image from '../Image/Image'
import Button from '../Button/Button'
import Box0 from '../Box0/Box0'
import Product from '../Product/Product'
import Storedata from '../Storedata/Storedata'
// import Showdata from '../Showdata/Showdata'
import Boxdata from '../Boxdata/Boxdata'
import Navbar from '../Navbar/Navbar'
// import Animedata from '../Animedata/Animedata'
import Mydata from '../Mydata/Mydata'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMailForward, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import Animedata from '../Animedata/Animedata'
import Boxtemp from '../Boxtemp/Boxtemp'
import Filteranime from '../Filteranime/Filteranime'
import Movie from "../Movie/Movie"
import Filtermovie from '../Filtermovie/Filtermovie'
import Input from '../Input/Input'
import Filterstore from '../Filterstore/Filterstore'
import Filter from '../Filter/Filter'
import Box1 from '../Box1'
import Modebtn from '../Modebtn/Modebtn'
import Carousel from '../Carousel/Carousel'
// import Library from '../Library/Library'

var teks = []
teks[0] = `Hello 👋 my name is Dedyas,  Saya adalah seorang junior developer yang mempelajari bidang frontEnd Developer dan ingin menguasai Android development di masa depan.Tagline saya adalah "Ingin Menjadi Frontend Handal (namun) Enggan Desain" ~IMFHED~ `
// console.log(teks)
const Content = () => {
    return (
        <>
            <div className="my-5 mx-auto bg-primary bg-gradient w-100 rounded-5 shadow-lg">
                <div className="p-4 text-white">
                    <p>
                        <span className='fs-6 fw-lighter text-light'>Created by</span><br />
                        Dedy Anang Setiawan
                    </p>
                    <figure className='w-100 mx-auto d-flex justify-content-center'>
                        <Image src={ppdedyas} classlist="rounded-circle" />
                    </figure>
                    <Txt classlist="w-100 itemBox p-2 rounded-3 mb-2" teks={teks[0]} />
                    <div className="d-grid">
                        <div className="my-4 pb-1">
                            <h2>
                                About Me
                            </h2>
                            <div className="container w-100 d-grid ">
                                <Box0 />
                            </div>
                            {/* <div id="data" className="my-2 rounded-3 itemBox p-4 shadow-lg">
                                <Boxdata />
                                <Mydata />
                            </div> */}
                        </div>
                    </div>
                    <div className="d-flex ">
                        <Button text="IG" classlist="my-2 d-flex justify-content-center align-items-center gap-2 shadow-lg btn btn-light w-25 me-1" icon={faInstagram} />
                        <Button text="Email" classlist="my-2 d-flex justify-content-center align-items-center gap-2 shadow-lg btn btn-light w-25 me-1" icon={faMailForward} />
                        <Button text="FB" classlist="my-2 d-flex justify-content-center align-items-center gap-2 shadow-lg btn btn-light w-25 me-1" icon={faFacebook} />
                    </div>
                    <textarea name="ap" id="cb" className=' form-control'></textarea><br />
                    <Button text="Submit" classlist="my-2 d-flex animBtn d-flex align-items-center shadow-lg btn btn-info w-25 me-1" icon={faAngleDoubleRight} />

                </div>
            </div>
            <Filter />
            <Modebtn />
            {/* <Box1/> */}
            {/* <Filteranime className="shadow-lg"/> */}
            {/* <Filterstore /> */}
            {/* <Filtermovie/> */}
            {/* <Product /> */}
            {/* <Carousel /> */}
        </>
    )
}

export default Content