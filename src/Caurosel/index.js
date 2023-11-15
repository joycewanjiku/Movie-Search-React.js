import React, { useEffect, useState } from "react"
import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Carousels = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=8644a1c8f15817cdc93d07d6ccdc34fb")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <div className="posterall">
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
          
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
               
            </div>
        </>
    )
}

export default Carousels;