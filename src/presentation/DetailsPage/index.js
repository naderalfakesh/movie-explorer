import React from "react";
import Stars from "./Stars";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Chip, Typography, Link } from "@material-ui/core";

export default function DetailsPage({ movie, background, poster }) {
    const useStyles = makeStyles((theme) => ({
        gridContainer: {
            backgroundColor: theme.palette.grey[200],
            display: "grid",
            gridTemplateColumns: "1fr 1fr 4fr",
            gridTemplateRows: "repeat(6,1fr)",
            overflow: "hidden",
        },
        poster: {
            gridColumn: "1/4",
            gridRow: "1/4",
            width: "100%",
            background: theme.palette.grey[200],
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transform: "skewY(-2.2deg)",
            transformOrigin: "0 0",
            zIndex: 1,
        },
        thumbnail: {
            gridColumn: "2/3",
            gridRow: "2/5",
            zIndex: 2,
        },

        categories: {
            gridColumn: "2/3",
            gridRow: "5/6",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(0.5),
                backgroundColor: "white",
            },
        },
        movieDetails: {
            gridColumn: "3/4",
            gridRow: "2/4",
            zIndex: 2,
            paddingLeft: theme.spacing(5),
            color: "#C7C1BA",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        },
        overview: {
            gridColumn: "3/4",
            gridRow: "4/6",
            color: "#B1B0AC",
            fontWeight: "bold",
            padding: theme.spacing(3, 5),
        },
        title: {
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        },
        ratings: {
            paddingTop: theme.spacing(2),
            fontSize: "1.125rem",
            display: "flex",
            "& span": {
                marginRight: theme.spacing(4),
            },
        },
    }));

    const classes = useStyles();
    return movie ? (
        <>
            <div className={classes.gridContainer}>
                <div className={classes.poster}></div>
                <div className={classes.thumbnail}>
                    <Link href={movie.homepage}>
                        <img src={poster} alt="Poster" width="100%" />
                    </Link>
                </div>
                <div className={classes.categories}>
                    {movie.genres.map((g) => (
                        <Chip key={g.name} label={g.name} variant="outlined" />
                    ))}
                </div>
                <div className={classes.movieDetails}>
                    <Typography variant="h1" className={classes.title}>
                        {movie.original_title}
                    </Typography>
                    <Typography variant="h6">
                        {movie.tagline || "Tag line is not available"}
                    </Typography>
                    <Typography variant="subtitle">
                        {`${movie.runtime}Min   Status: ${movie.status}     ${movie.release_date}`}
                    </Typography>
                    <Box className={classes.ratings}>
                        <span>
                            <Stars rating={movie.vote_average} />
                        </span>
                        <span role="img" aria-label="heart">
                            ❤️{" " + movie.vote_count}
                        </span>
                    </Box>
                </div>
                <div className={classes.overview}>
                    <Typography variant="h5">{movie.overview}</Typography>
                </div>
            </div>
        </>
    ) : (
        <div>Getting info</div>
    );
}
