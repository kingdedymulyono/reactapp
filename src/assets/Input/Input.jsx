import React from 'react'

const Input = (prop) => {
    return (
        // <div>Input</div>
        <div className="d-flex flex-row align-items-center gap-1">
        <label htmlFor="inp">
            {prop.teks}
        </label>
            <input type="text" name='inp' className='form-control w-50' placeholder={prop.ph} onChange={prop.Func}/>
        </div>
    )
}

export default Input