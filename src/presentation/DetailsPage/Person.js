import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { imageBaseURL } from "../../Components/API/constants";
import css from "./style.js";

export default function Person({ data }) {
    // const background = data ? imageBaseURL(1280) + data.backdrop_path : "";
    const poster = data ? imageBaseURL(200) + data.profile_path : "";
    const classes = css();

    return (
        <>
            <div className={classes.gridContainer}>
                <div className={classes.poster}></div>
                <div className={classes.thumbnail}>
                    <Link href={data.homepage}>
                        <img src={poster} alt="Poster" width="100%" />
                    </Link>
                </div>
                <div className={classes.movieDetails}>
                    <Typography variant="h1" className={classes.title}>
                        {data.name}
                    </Typography>
                    <Typography variant="h6">
                        {"Place of birth: " + data.place_of_birth ||
                            "Place of birth: not available"}
                    </Typography>
                    <Typography variant="h6">
                        {"Known for: " + data.known_for_department}
                    </Typography>
                    <Typography variant="subtitle1">
                        {`Birthday: ${data.birthday}  ${
                            data.deathday ? "Deathday: " + data.deathday : ""
                        }`}
                    </Typography>
                    <Box className={classes.ratings}>
                        <span role="img" aria-label="heart">
                            ❤️{" " + data.popularity}
                        </span>
                    </Box>
                </div>
                <div className={classes.overview}>
                    <Typography variant="h5">
                        {data.biography && data.biography.slice(0, 500)}
                    </Typography>
                </div>
            </div>
        </>
    );
}
