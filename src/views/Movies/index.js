import React, { useState, useEffect } from "react";
import { getMovies } from "../../Components/API";
import MovieCard from "../MediaCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(200px, 1fr))",
        gridGap: theme.spacing(3),
    },
}));

export default function Movies() {
    const classes = useStyles();

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies().then((data) => setMovies(data.results));
    }, []);
    return (
        <div className={classes.wrapper}>
            {movies.map((movie) => (
                <MovieCard {...movie} type="movie" />
            ))}
        </div>
    );
}
