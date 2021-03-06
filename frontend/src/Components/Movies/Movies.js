import React,{useState} from "react";
import "./Movies.css";
import { useNavigate } from "react-router-dom";

const Movies = ({ movies }) => {
  const navigate = useNavigate();


  const movieDetails = (id) => {
    navigate(`../movie/${id}`, { state: { links: { id } } });
  };


  const movieData = movies.map((movie) => {
    return (
      <>
        <div className="movie" key={movie.movieid}>
          <span onClick={() => movieDetails(movie.movieid)}>
            <img className="movieimg" src={movie.image} alt="" />
          </span>
          <div className="moviename">
            <h3>{movie.name}</h3>
            <h3>Rating : {movie.averageRating} &#11088;</h3>
            <h5>Release Date: {movie.releaseDate}</h5>
            <button
              className="ratebtn"
              onClick={() => movieDetails(movie.movieid)}
            >
              Rate now
            </button>
          </div>
        </div>
      </>
    );
  });
  return(
  <>
    <div className="moviecontainer">{movieData}</div>
  </>);


};

export default Movies;
