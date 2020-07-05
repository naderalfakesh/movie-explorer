import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../../Components/API";
import { imageBaseURL } from "../../../Components/API/constants";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Box,
    Container,
    Chip,
    Typography,
    Link,
} from "@material-ui/core";
import Stars from "./Stars";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    useEffect(() => {
        getMovie(id).then(setMovie);
    }, [id]);
    const background = movie ? imageBaseURL(1280) + movie.backdrop_path : "";
    const useStyles = makeStyles((theme) => ({
        container: {
            position: "relative",
            minHeight: "70vh",
            overflow: "hidden",
            zIndex: -2,
            backgroundColor: theme.palette.grey[200],
        },
        wrapper: {
            marginBottom: theme.spacing(5),

            "&:before": {
                content: '""',
                width: "100%",
                height: "70vh",
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
        chips: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(0.5),
                backgroundColor: "white",
            },
        },
        title: {
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        },
        tag: {
            color: "#C7C1BA",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
        },
        details: {
            color: "#C7C1BA",
            "& >*": {
                marginRight: theme.spacing(2),
            },
        },
        likes: {
            color: "#C7C1BA",
            "& span": {
                color: "red",
                marginRight: theme.spacing(1),
            },
        },
        overview: {
            color: "#B1B0AC",
            fontWeight: "bold",
        },
    }));

    const classes = useStyles();

    return movie ? (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Container maxWidth="md">
                    <Grid container spacing={10}>
                        <Grid item xs={3}>
                            <Box mt={"30vh"}>
                                <Link href={movie.homepage}>
                                    <img
                                        src={
                                            imageBaseURL(200) +
                                            movie.poster_path
                                        }
                                        alt="Poster"
                                        width="100%"
                                    />
                                </Link>
                                <div className={classes.chips}>
                                    {movie.genres.map((g) => (
                                        <Chip
                                            key={g.name}
                                            label={g.name}
                                            variant="outlined"
                                        />
                                    ))}
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Box mt={"30vh"}>
                                <Typography
                                    variant="h1"
                                    className={classes.title}
                                >
                                    {movie.original_title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className={classes.tag}
                                >
                                    {movie.tagline || movie.original_title}
                                </Typography>

                                <Box
                                    display="flex"
                                    className={classes.details}
                                    mt={2}
                                >
                                    <Stars rating={movie.vote_average} />
                                    <Typography className={classes.likes}>
                                        <span>❤️</span>
                                        {movie.vote_count}
                                    </Typography>
                                </Box>
                                <Box display="flex" className={classes.details}>
                                    <Typography>{movie.runtime}Min</Typography>
                                    <Typography>
                                        {movie.release_date}
                                    </Typography>
                                    <Typography>
                                        Status: {movie.status}
                                    </Typography>
                                    <Typography></Typography>
                                </Box>
                            </Box>
                            <Box mt={10}>
                                <Typography className={classes.overview}>
                                    {movie.overview}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    ) : (
        <div>Getting info</div>
    );
}
