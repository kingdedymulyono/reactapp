import React from 'react'
import { useEffect , useState } from 'react'
const Mydata = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
        } ,[])
        // console.log(users)
  return (
    <div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                {

                    users.map((user)=>{
                        if(user.category=="men's clothing"){
                            return(
                                <tr key={user.index}>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.price}</td>
                                </tr>
                            )
                        }
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Mydata