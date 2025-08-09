import React from 'react'
const Grid = ({children}) => {
    return (
        <>
        <div className="d-grid gap-2" >
            <div className="row gap-1 grid-template-columns-4 justify-content-evenly">
                {children}
            </div>
        </div>
        </>
    )
}

export default Grid