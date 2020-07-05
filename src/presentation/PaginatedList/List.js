import React from "react";
import MovieCard from "../MediaCard";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(200px, 1fr))",
        gridGap: theme.spacing(3),
    },
}));
export default function PaginatedList({ list, type }) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {list.map((movie) => (
                <MovieCard {...movie} type={type} key={movie.id} />
            ))}
        </div>
    );
}