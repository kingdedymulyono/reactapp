import React from 'react'

const Listitem = ({children}) => {
  return (
    <li className=' list-group-item'>
        {children}
    </li>
  )
}

export default Listitem