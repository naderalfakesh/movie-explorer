import React from "react";
import { Typography, Box, Chip } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { imageBaseURL } from "../../../Components/API/constants";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import genres from "../../../Components/API/genres";

const useStyles = makeStyles((theme) => ({
    card: {
        width: imgWidth,
        height: imgHeight,
        background: theme.palette.primary.main,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover div:nth-child(2)": {
            bottom: 0,
        },
        "&:hover div:nth-child(1)::before": {
            bottom: 0,
        },
        "&:hover img": {
            filter: "blur(5px)",
            transform: "translateY(-50px)",
        },
    },
    poster: {
        position: "relative",
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: -140,
            left: 0,
            zIndex: 1,
            background: "linear-gradient(0deg, #000 50%, transparent)",
            transition: "0.5s",
        },
    },
    posterImg: {
        width: "100%",
        objectFit: "cover",
        transition: "0.5s",
    },
    details: {
        color: "#fff",
        position: "absolute",
        height: "90%",
        width: "100%",
        boxSizing: "border-box",
        padding: theme.spacing(2),
        bottom: -140,
        left: 0,
        transition: "0.5s",
        zIndex: 2,
    },
    title: {
        fontWeight: 900,
    },
    rating: {
        color: "#f5b50a",
        fontSize: "1em",
    },
}));

const imgWidth = 200;
const imgHeight = 300;

export default function MediaCard(props) {
    const classes = useStyles();
    let history = useHistory();
    const { type = "movie" } = props;
    const genre = genres.find((item) => item.id === props.genre_ids[0]) || {
        name: "Action",
    };
    return (
        <Box
            className={classes.card}
            onClick={() => history.push(`/${type}/${props.id}`)}
        >
            <Box className={classes.poster}>
                <img
                    className={classes.posterImg}
                    src={`${imageBaseURL(300)}${props.poster_path}`}
                    alt={props.title || props.name}
                    key={props.title || props.name}
                />
            </Box>
            <Box className={classes.details}>
                <Typography
                    variant="h6"
                    component="h2"
                    className={classes.title}
                    noWrap
                >
                    {props.title || props.name}
                </Typography>
                <Typography variant="caption" component="h3">
                    {type === "movie"
                        ? props.release_date.slice(0, 4)
                        : props.first_air_date.slice(0, 4)}
                </Typography>
                <Box mb={1}>
                    <StarIcon className={classes.rating} />
                    <StarIcon className={classes.rating} />
                    <StarIcon className={classes.rating} />
                    <StarIcon className={classes.rating} />
                    <StarBorderIcon className={classes.rating} />
                </Box>
                <Box className={classes.tags} mb={2}>
                    <Chip color="secondary" label={genre.name} size="small" />
                </Box>
                <Box className={classes.info}>
                    <Typography>{props.overview.slice(0, 90)}...</Typography>
                </Box>
            </Box>
        </Box>
    );
}
