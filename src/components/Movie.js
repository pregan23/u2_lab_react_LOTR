import React from 'react';

const Movie = (movie) => {
    // const movieTitle = 
    return (
        <div>
            <img src = {movie.poster}/>
            <h1>Lord of the Rings: {movie.title} </h1>
            <p>{movie.year} Runtime: {movie.hours} hrs, {movie.minutes} minutes </p>
            
        </div>
    ) 
};
export default Movie;