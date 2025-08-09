import React from 'react'
import Filteranime from '../Filteranime/Filteranime'
import Filterstore from '../Filterstore/Filterstore'
import Filtermovie from '../Filtermovie/Filtermovie'
import Product from '../Product/Product'
import Jokes from '../Jokes/Jokes'

const Result = (prop) => {
    if(prop.res=="anime"){
        return(
            // <h3>Tampilkan data anime</h3>
            <Filteranime />
        )
    }else if(prop.res=="store"){
        return(
            // <h3>Tampilkan data store</h3>
            <Filterstore />
        )
    }else if(prop.res=="films"){
        return(
            // <h3>Tampilkan data films</h3>
            <Filtermovie />
        )
    }else if(prop.res=="products"){
        return(
            // <h3>Tampilkan data products</h3>
            <Product />
        )
    }else if(prop.res=="jokes"){
        return(
            // <h3>Tampilkan data products</h3>
            // <Product />
            <Jokes />
        )
    }
}

export default Result