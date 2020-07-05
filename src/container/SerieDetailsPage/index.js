import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSerie } from "../../Components/API";
import { imageBaseURL } from "../../Components/API/constants";
import SeriesDetailsPage from "../../presentation/SerieDetailsPage";

export default function SeriesDetailsPageContainer() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    useEffect(() => {
        getSerie(id).then(setMovie);
    }, [id]);
    const background = movie ? imageBaseURL(1280) + movie.backdrop_path : "";

    const poster = movie ? imageBaseURL(200) + movie.poster_path : "";

    return (
        <SeriesDetailsPage
            movie={movie}
            background={background}
            poster={poster}
        />
    );
}
