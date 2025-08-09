import React from 'react'
import Storedata from '../Storedata/Storedata'
import Input from '../Input/Input'
import { useState } from 'react'
import Boxtemp from '../Boxtemp/Boxtemp'
const Filterstore = () => {
    const [item, setItem] = useState("electronics");
    const handleChange = (event) => {
        setItem(event.target.value)
    }
    return (
        <>
            <Boxtemp>
                <div className="d-flex align-items-center justify-content-center">
                    <label htmlFor="search">Filter by category</label>
                    <select name="search" id="search" className='ms-2 form-select w-50' onChange={() => { handleChange(event) }}>
                        <option value="electronics">Electronic</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                </div>
            </Boxtemp >
            {/* {item} */}
            < Storedata item={item} />
        </>
    )
}

export default Filterstore