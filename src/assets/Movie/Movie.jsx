import React from 'react'
import { useEffect, useState } from 'react'
import List from '../List/List'
import Listitem from '../Listitem/Listitem'
import Moviedata from '../Moviedata/Moviedata'
import Grid from '../Grid/Grid'
const Movie = (prop) => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=c71eb3df&s=${prop.search}`)
            .then(respon => respon.json())
            .then(data => setItem(data.Search))
    }, [prop.search])
    console.table(item)
    return (
        <>
            <h4>Movie</h4>
            <Grid>
                {item.map((film) => {
                    return (
                        <div className="card col-5">
                            <div className="d-flex justify-content-center">
                                <img src={film.Poster} alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{film.Title}</h5>
                                <div className="card-text">
                                    <Moviedata id={film.imdbID} />
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })}
            </Grid>
        </>
    )
}

export default Movie