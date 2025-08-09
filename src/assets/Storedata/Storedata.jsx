import React from 'react'
import { useState, useEffect } from 'react'
import "./Storedata.css"

const Storedata = (prop) => {
    const [user, setUser] = useState([]);
    const [load,setLoad]=useState(true);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => { 
                setUser(data) 
                setLoad(false)
            })
    })
    // console.log(user.category)
    if(load){
        return(
            <h4>Wait a second....</h4>
        )
    }
    return (
        <div className="d-grid w-100">
            <div className="w-100 d-flex justify-content-center">
                <div className="row itemrow w-100 gap-2 justify-content-center d-flex shadow">
                    {   
                        user.map((items) => {
                            // console.table(items.category)
                            if (items.category == prop.item) {
                                return (
                                    <>
                                        <div className="card col-md-5 col-sm-10 col-lg-3 d-flex align-items-center rounded-4" key={items.index}>
                                            <div className="d-flex">
                                                <img src={items.image} className="product" alt="..." loading="lazy" />
                                            </div>
                                            <div className="card-body d-flex align-items-center flex-column" >
                                                <h5 className="card-title">{items.title}</h5>
                                                {/* <p className="card-text text-secondary fs-6">{items.description}</p> */}
                                                {/* {
                                                    items.rating.map((item,index)=>{
                                                        return(
                                                            <p key={index}>{item.rate}</p>
                                                        )
                                                    })
                                                } */}
                                                <p>{items.rating.rate}⭐ {items.rating.count}</p>
                                                <a href="#" className="btn btn-primary my">Only ${items.price}</a>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })

                    }

                </div>
            </div>
        </div>

    )
}

export default Storedata