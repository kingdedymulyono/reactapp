import React from 'react'
import Input from '../Input/Input'
import Movie from '../Movie/Movie'
import Boxtemp from '../Boxtemp/Boxtemp'
import Grid from '../Grid/Grid'
import Moviedata from '../Moviedata/Moviedata'
import { useState , useEffect } from 'react'
const Filtermovie = () => {
  const [id,setId]=useState("film");
  const handleChange= (event) => {
      setId(event.target.value)
  }
  const [warn,setWarn]= useState("")
  const [item, setItem] = useState([])
      useEffect(() => {
              fetch(`https://www.omdbapi.com/?apikey=c71eb3df&s=${id}`)
        .then(respon => respon.json())
        .then(data => {
            // Periksa apakah data.Search ada dan bukan null/undefined
            if (data.Search) {
                setItem(data.Search);
                setWarn("")
            } else {
                // Atur item menjadi array kosong jika tidak ada hasil
                // Ini penting agar .map tidak error pada render berikutnya
                setItem([]); 
                setWarn("Tidak ada film ditemukan atau ada error:", data.Error);
            }
        })
        .catch(error => {
            console.error("Terjadi kesalahan saat mengambil data:", error);
            setItem([]); // Pastikan item tetap array kosong jika ada error fetch
        });
      }, [id])
      console.table(item)
  return (
    <Boxtemp>
      {/* <Filtermovie /> */}
      <div className="d-flex flex-row align-items-center gap-1">
        <label htmlFor="inp">
            Cari film
        </label>
            <input type="text" name='inp' className='form-control w-50' placeholder="Masukkan keyword" onChange={(event)=>{handleChange(event)}}/>
        </div>
      {/* <p>{id}</p> */}
      
            {/* <h4>Movie</h4> */}
            <br />
            <br />
            <Grid>
              {warn}
                {item.map((film) => {
                    return (
                        <div className="card col-5 p-3">
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
    </Boxtemp>
  )

}



export default Filtermovie