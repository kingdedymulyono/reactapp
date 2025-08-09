import React from 'react'
import "./glass.css"
const Boxtemp = ({children,aos,delay}) => {
  return (
    <div data-aos={aos} data-aos-delay={delay} className='glass shadow p-4 w-100 m-2 rounded-4 mb-3 mx-auto'>
        {children}
    </div>
  )
}

export default Boxtemp