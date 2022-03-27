import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            // console.log(request.data.results);
            // console.table(request.data.results)
        }
        fetchData()
    }, [fetchUrl]) //componentDidUpdate , fetch url değişince çalış.

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {

        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie.title || "" || movie.original_title || movie.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))

            // movieTrailer(`${name}`, (error, response) => {
            //     const urlParams = new URLSearchParams(new URL(response).search);
            //     setTrailerUrl(urlParams.get('v'))
            //     // console.log(error)
            // })
        }

        // console.log(movie.name)

    }

    // console.log(movies[0])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    < img
                        onClick={() => handleClick(movie)}
                        alt={movie.title || movie.name || movie.original_title}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        key={movie.id} />
                ))}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row