import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { imageBaseURL } from "../../Components/API/constants";
import StarIcon from "@material-ui/icons/Star";
import Icon from "@material-ui/core/Icon";

const imgWidth = 200;
const imgHeight = 300;

const useStyles = makeStyles((theme) => ({
    img: {
        height: imgHeight,
        width: imgWidth,
        // filter: "hue-rotate(90deg)",
    },
    wrapper: {
        height: imgHeight,
        width: imgWidth,
        position: "relative",
        "&:hover": {
            color: "#dcf836",
        },
    },
    details: {
        position: "absolute",
        width: imgWidth,
        bottom: 0,
    },
    title: {
        color: "white",
        textDecoration: "none",
        fontWeight: 900,
        "&:hover": {
            color: "#dcf836",
        },
    },
    rating: {
        color: "white",
    },
    vote: {
        fontSize: "2em",
    },
    star: {
        color: "#f5b50a",
        fontSize: "2em",
        margin: "auto 0",
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <img
                className={classes.img}
                src={`${imageBaseURL(300)}${props.poster_path}`}
                alt={props.title || props.name}
                key={props.title || props.name}
            />
            <div className={classes.details}>
                <Typography variant="h5" component="h2">
                    <Link
                        className={classes.title}
                        to={`/${props.type}/${props.id}`}
                    >
                        {props.title || props.name}
                    </Link>
                </Typography>
                <br />
                <Typography color="inherit" className={classes.rating}>
                    <StarIcon className={classes.star} />
                    <span className={classes.vote}>{props.vote_average}</span>
                    /10
                </Typography>
            </div>
        </div>
    );
}
