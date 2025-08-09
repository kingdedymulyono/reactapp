import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import 
const Navbar = () => {
    const handleBtn = () => {
        location.href="../../store_page.html";
    }
    return (
        <>
            <nav>
                <div className='d-flex gap-2 align-items-center'>
                    <a className='text-white text-decoration-none' onClick={handleBtn}>Store
                    </a>
                </div>
                <div>INI APLIKASI PERTAMAKU</div>
                <div>
                    <a className='text-white text-decoration-none'></a>
                </div>
            </nav>
        </>
    )
}
export default Navbar