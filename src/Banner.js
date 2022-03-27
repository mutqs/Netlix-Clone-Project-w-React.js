import React, { useEffect, useState } from 'react'
import axios from "./axios"
import requests from "./request"
import "./Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/"


const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request;
        };
        fetchData();
    }, [])

    // console.log(movie)

    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})
                `,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>
                    {movie?.overview}
                </h1>
                {/* <img src={`${base_url}${movie?.backdrop_path}`} alt="img" /> */}
            </div>
            <div className='banner-fadeBottom'></div>
        </header>
    )
}

export default Banner