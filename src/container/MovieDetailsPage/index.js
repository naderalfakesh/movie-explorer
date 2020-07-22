import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../Components/API";
import DetailsPage from "../../presentation/DetailsPage";

export default function MovieDetailsContainer() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    useEffect(() => {
        getMovie(id).then(setMovie).catch(console.log);
    }, [id]);
    return <DetailsPage data={movie} type="movie" />;
}
