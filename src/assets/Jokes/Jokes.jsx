import React from 'react'
import Cnjokes from './Cnjokes'
import Jokes2 from './Jokes2'
import Boxtemp from '../Boxtemp/Boxtemp'

const Jokes = () => {
    return (
        <>
            <Boxtemp>
                <div className="bg-white rounded-3 p-2">
                    <Cnjokes data-aos-delay="200"/>
                </div>
                <br />
                <div className="bg-white rounded-3 p-2">
                    <Jokes2/>
                </div>
                {/* <Jokes2 /> */}
            </Boxtemp>
        </>
    )
}

export default Jokes