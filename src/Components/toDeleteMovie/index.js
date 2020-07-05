import React from 'react';

const Movie = ({match, movies}) => {
    console.log(match.params.id);
    console.log(movies);
    return (<div>Movie information</div>)
}

export default Movie;