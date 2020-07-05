import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../Components/API";
import { imageBaseURL } from "../../Components/API/constants";
import MovieDetails from "../../presentation/MovieDetailsPage"

export default function MovieDetailsContainer() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    useEffect(() => {
        getMovie(id).then(setMovie);
    }, [id]);
    const background = movie ? imageBaseURL(1280) + movie.backdrop_path : "";
    const poster = movie ? imageBaseURL(200) + movie.poster_path : "";

    return (
        <MovieDetails movie={movie} background={background} poster={poster} />
    )
}
