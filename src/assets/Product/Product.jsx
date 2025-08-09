import React from 'react'
import Boxtemp from '../Boxtemp/Boxtemp'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
// import { data } from 'react-router-dom'
const Product = () => {
    const [item, setItem] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                setItem(data.products)
            }
            )
        setLoad(false)
    }, [])
    // console.table(item.product)
    if (load) {
        return (
            <h4>Wait a second</h4>
        )
    }
    return (
        <Boxtemp>
            <div className="d-grid w-100">
                <div className="row justify-content-center gap-2">
                    {item.map((items) => {
                        // console.log(items.title)
                        return (
                            <div key={items.id} className="card col-md-5 col-sm-12 col-lg-4 d-flex align-items-center rounded-4">
                                <div className="d-flex">
                                    <img src={items.thumbnail} className="product" />
                                </div>
                                <div className="card-body d-flex align-items-center flex-column gap-1" >
                                    <div className="d-flex align-items-center gap-1">
                                        <h5 className="card-title fw-bold p-1 m-0">
                                            {items.title}
                                        </h5>
                                        <span className='bg bg-danger shadow-sm text-white p-1 rounded fw-light'>
                                            <em>
                                                {items.discountPercentage}% OFF
                                            </em>
                                        </span>
                                    </div>
                                    <div className="d-flex w-100 gap-1">
                                        <span className='p-2 rounded bg-gradient bg-primary-subtle text-primary pe-4' >
                                            <FontAwesomeIcon icon={faShop} className='mx-1' />
                                            {items.brand}
                                        </span>
                                        {items.tags.map((tag) => {
                                            return (
                                                <span className='bg-secondary-subtle p-2 rounded-pill fw-light'>{tag}</span>
                                            )
                                        })}
                                    </div>
                                    <p>{items.description}<br />
                                        <span className='text-secondary fw-lighter fs-6'>{items.sku}</span>
                                    </p>
                                    <p>{items.availabilityStatus} ⭐{items.rating}</p>
                                    <a href="#" className="btn btn-primary my">Only ${items.price}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Boxtemp>
    )
}

export default Product