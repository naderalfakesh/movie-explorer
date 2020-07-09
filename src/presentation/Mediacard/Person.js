import React from "react";
import { Typography, Box, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { imageBaseURL } from "../../Components/API/constants";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    card: {
        width: imgWidth,
        height: imgHeight,
        background: theme.palette.primary.main,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "4px",
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

export default function Person(props) {
    const classes = useStyles();
    let history = useHistory();

    return (
        <Box
            className={classes.card}
            onClick={() => history.push(`/${props.type}/${props.id}`)}
        >
            <Box className={classes.poster}>
                <img
                    className={classes.posterImg}
                    src={`${imageBaseURL(300)}${props.profile_path}`}
                    alt={props.name}
                    key={props.name}
                />
            </Box>
            <Box className={classes.details}>
                <Typography
                    variant="h6"
                    component="h2"
                    className={classes.title}
                    noWrap
                >
                    {props.name}
                </Typography>
                <Typography variant="caption" component="h3">
                    {props.gender === 1 ? "Female" : "Male"}
                </Typography>
                <Box mb={1}>
                    
                    <Typography>Popularity: {props.popularity}</Typography>
                </Box>
                <Box className={classes.tags} mb={2}>
                    <Chip
                        color="secondary"
                        label={props.known_for_department}
                        size="small"
                    />
                </Box>
                <Box className={classes.info}>
                <Typography>Known for:</Typography>
                    {props.known_for.map(item=><Typography key={item.id}>{item.title || item.name}.</Typography>)}
                </Box>
            </Box>
        </Box>
    );
}
