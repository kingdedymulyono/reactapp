import React, { useEffect, useState } from 'react'
import Boxtemp from '../Boxtemp/Boxtemp'

const Cnjokes = () => {
    const [item, setItem] = useState({})
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => { setItem(data) })
        setLoad(false)
    }, [])
    console.log(item)
    if (load) {
        return (
            <h4>Wait a second...</h4>
        )
    }
    return (
        <>
            <br />
            <p className='m-0 fw-bold'>
                {item.value}
            </p>
            <span className='text-secondary'>{item.updated_at}</span>
            <br />
            <br />
        </>
    )
}

export default Cnjokes