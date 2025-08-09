import React, { useEffect, useState } from 'react'

const Jokes2 = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => setItem(data))
    }, [])
    console.log(item)
    return (
        <>
            <br />
            <p className='m-0 fw-bold'>
                {item.setup}
            </p>
            <span>{item.punchline}</span>
            <br />
            <br />
        </>
    )
}

export default Jokes2