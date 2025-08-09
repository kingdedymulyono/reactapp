import React from 'react'
import { useState, useEffect } from 'react'
import "./Animedata.css"
import Button from '../Button/Button'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBookmark, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Boxtemp from '../Boxtemp/Boxtemp'
// import Imgbtn from '../Imgbtn/Imgbtn'
// import mal from "../../assets/myanimelist-svgrepo-com.svg"
const Animedata = () => {
    const [year, setYear] = useState("2025");
    const [season, setSeason] = useState("summer");
    const handleYear = (event) => {
        setYear(event.target.value)
    }
    const handleSeason = (event) => {
        setSeason(event.target.value)
    }
    const [loading, setLoading] = useState(true)
    const [animeList, setAnimeList] = useState([]);

    // var res=`https://api.jikan.moe/v4/seasons/${year}/${season}`;

    // console.log(res)
    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setAnimeList(data.data);
                setLoading(false)

            })
    }, [year, season]);
    // console.log(animeList.map((item) => { return item.genres.type }))
    const handleYt = (link) => {
        location.href = link;
    };
    const handleMal = (link) => {
        location.href = link;
    };
    if (loading) {
        return (
            <h4 className='bg bg-white text-center p-2'>Wait A Second....</h4>
        )
    }
    return (
        <>

            <Boxtemp>
                <h3>Filter</h3>
                <div className="d-flex align-items-center gap-2">

                    <label htmlFor="tahun">Tahun</label>
                    <select name="tahun" id="tahun" className='form-select w-25' onChange={handleYear}>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                    </select>
                    {/* <p>{year}</p> */}
                    <label htmlFor="season">Season</label>
                    <select name="season" id="season" className='form-select w-25' onChange={handleSeason}>
                        <option value="summer">summer</option>
                        <option value="spring">spring</option>
                        <option value="fall">fall</option>
                        <option value="winter">winter</option>
                    </select>
                </div>
            </Boxtemp>
            <div className="p-2 py-4 shadow-lg w-100 m-2 rounded-4 d-grid w-100 bg-white animeBox" >
                <div className="row gap-2 gap-lg-1 justify-content-center">
                    {animeList.map((anime) => {
                        return (
                            <div className="card col-md-5 col-sm-10 col-lg-3 rounded-3">
                                <h5 className="card-title text-center text-primary fw-bold m-3">
                                    {anime.title}
                                </h5>
                                <div className=" d-flex justify-content-center">
                                    <img src={anime.images.jpg.image_url} className="" alt="..." loading='lazy' />
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <div className="d-flex w-100 gap-1 align-items-center">
                                            <h6>{anime.title_english}</h6>
                                            <span className='text-secondary fs-6'> #
                                                {anime.popularity}</span>
                                            <br />
                                        </div>
                                        <div className="d-flex justify-content-evenly w-100">
                                            <span>
                                                <FontAwesomeIcon icon={faStar} className='mx-1' />
                                                {anime.score}
                                            </span>
                                            <span>

                                                (<FontAwesomeIcon icon={faUser} className='mx-1' />
                                                {anime.scored_by})
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faBookmark} className='mx-1' />
                                                {anime.favorites}</span>
                                        </div>
                                    </div><br />
                                    <p>{anime.genres.map((item) => {
                                        return (
                                            <span className='fs-6 bg bg-secondary-subtle p-2 rounded-pill me-1 text-center' key={item.mal_id}>{item.name} </span>
                                        )
                                    })}</p>
                                    <p>{anime.type} {anime.episodes} eps</p>
                                    <p className='m-0'>
                                        <span className='fw-bold me-1'>
                                            Studio :
                                        </span>
                                        {anime.studios.map((studio) => {
                                            return (
                                                studio.name
                                            )
                                        })}</p>
                                    <p className='m-0'>
                                        <span className='fw-bold me-1'>
                                            Sources :
                                        </span>
                                        {anime.source}</p>
                                    {/* <p> */}
                                    <span className='fw-bold me-1'>
                                        Themes :
                                    </span>
                                    <ul className='m-0'>
                                        {anime.themes.map((theme) => {
                                            if (theme.name) {
                                                return (
                                                    <li key={theme.mal_id}>
                                                        {theme.name}
                                                    </li>
                                                )
                                            }
                                            else {
                                                return (
                                                    <li>none</li>
                                                )
                                            }
                                        })}
                                    </ul>
                                    <p>
                                        <span className='fw-bold me-1'>
                                            Status :
                                        </span>
                                        {anime.status}</p>
                                    <p className='text-secondary'>{anime.rating}</p>
                                    <div className=" my-auto gap-1 d-flex">
                                        <Button text="Preview" classlist="btn btn-danger" btnFunc={() => { handleYt(anime.trailer.url) }} icon={faYoutube} />
                                        <Button classlist="btn btn-primary" text="MAL Page" btnFunc={() => { handleMal(anime.url) }} icon='' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Animedata