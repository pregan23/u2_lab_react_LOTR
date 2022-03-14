import React from 'react';
// import movies from './App'

const Movie = (props) => {

    
    // const movieTitle = 
    return (
        <div>
            <img src = {props.movie.poster}/>
            <h1>Lord of the Rings: {props.movie.title} </h1>
            <p>{props.movie.year} - Runtime: {props.movie.hours} hrs, {props.movie.minutes} minutes - Rated PG-13</p>
            
        </div>
    ) 
    
};
export default Movie;