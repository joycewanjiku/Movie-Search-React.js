import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
// import { getMovieSearch } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const moviesData = await getMovies();
      setMovies(moviesData.results);
      setLoading(false);
      console.log({ movies: moviesData });
    })();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleHover = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };



  const filteredMovies = movies.filter((movie) =>
    movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <nav className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </nav>

      <div className="image-container">
        {loading === false &&
          filteredMovies.length > 0 &&
          filteredMovies.map((item) => (
            <div
              key={item.id}
              className="movie-container"
              onMouseEnter={() => handleHover(item)}
              onMouseLeave={handleMouseLeave}
            >
              <ImageContainer props={item} />
              {hoveredMovie && hoveredMovie.id === item.id && (
                <div className="movie-details">
                  <h3>{item.title}</h3>
                  <p>{item.overview}</p>
                  <p>Release Date: {item.release_date}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;