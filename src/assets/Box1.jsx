import React from 'react'
import Boxtemp from './Boxtemp/Boxtemp'
// import { Button } from 'bootstrap'
import Button from './Button/Button'
import Swal from 'sweetalert2'
// var swal1=
const handleBtn = () => {
    Swal.fire({
        html: `
        <div class=" w-100 d-flex justify-content-center">
        <figure class="cardImg">
            <div class="glass w-75 h-75">
                Apacoba
            </div
        </figure>
        </div>
        `,
        // icon: i,
        confirmButtonText: 'Cool'
    })
}
const Box1 = () => {
    return (
        <Boxtemp aos="fade-up" delay={100}>
            {/* Apacoba */}
            <Button text="ShowSwal" classlist="rounded p-2 animBtnBlue" btnFunc={() => { handleBtn() }} />
            {/* <div className="cardImg border border-primary">
                    Apacoba
            </div> */}
        </Boxtemp>
    )
}

export default Box1