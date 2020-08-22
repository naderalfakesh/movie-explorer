import React from "react";
import Stars from "./Stars";
import { Box, Chip, Typography, Link } from "@material-ui/core";
import { imageBaseURL } from "../../Components/API/constants";
import css from "./style.js";

export default function Tv({ data }) {
    const background = data ? imageBaseURL(1280) + data.backdrop_path : "";
    const poster = data ? imageBaseURL(200) + data.poster_path : "";
    const classes = css({ background });
    return (
        <>
            <div className={classes.gridContainer}>
                <div className={classes.poster}></div>
                <div className={classes.thumbnail}>
                    <Link href={data.homepage}>
                        <img src={poster} alt="Poster" width="100%" />
                    </Link>
                </div>
                <div className={classes.categories}>
                    {data.genres &&
                        data.genres.map((g) => (
                            <Chip
                                key={g.name}
                                label={g.name}
                                variant="outlined"
                            />
                        ))}
                </div>
                <div className={classes.movieDetails}>
                    <Typography variant="h1" className={classes.title}>
                        {data.original_name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {`${data.number_of_episodes}EP   Status: ${data.status}     ${data.first_air_date}`}
                    </Typography>
                    <Box className={classes.ratings}>
                        <span>
                            <Stars rating={data.vote_average} />
                        </span>
                        <span role="img" aria-label="heart">
                            ❤️{" " + data.vote_count}
                        </span>
                    </Box>
                </div>
                <div className={classes.overview}>
                    <Typography variant="h5">{data.overview}</Typography>
                </div>
            </div>
        </>
    );
}
