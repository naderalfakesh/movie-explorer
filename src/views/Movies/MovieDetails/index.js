import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../../Components/API";
import { imageBaseURL } from "../../../Components/API/constants";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rating: {
        color: "#f5b50a",
        fontSize: "1em",
    },
}));

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    useEffect(() => {
        getMovie(id).then(setMovie);
    }, [id]);
    const background = movie ? imageBaseURL(1280) + movie.backdrop_path : "";
    const useStyles = makeStyles((theme) => ({
        wrapper: {
            "&:before": {
                content: '""',
                width: "100%",
                height: "100%",
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0,
                background: "red",
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: -1,
                transform: "skewY(-2.2deg)",
                transformOrigin: "0 0",
            },
        },
        container: {
            position: "relative",
            minHeight: "200px",
            overflow: "hidden",
        },
    }));

    const classes = useStyles();

    return movie ? (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                {/* <img
                    src={imageBaseURL(1280) + movie.backdrop_path}
                    alt="banner"
                /> */}
                <img src={imageBaseURL(200) + movie.poster_path} alt="Poster" />
                <p>{movie.original_title}</p>
                <p>{movie.homepage}</p>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>{movie.runtime}</p>
                <p>{movie.status}</p>
                <p>{movie.tagline}</p>
                <p>{movie.vote_average}</p>
                <p>{movie.vote_count}</p>
                {movie.genres.map((g) => (
                    <p>{g.name}</p>
                ))}
            </div>
        </div>
    ) : (
        <div>Getting info</div>
    );
}
