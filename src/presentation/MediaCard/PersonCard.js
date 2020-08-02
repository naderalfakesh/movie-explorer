import React from "react";
import { Typography, Box, Chip } from "@material-ui/core";
import { imageBaseURL } from "../../Components/API/constants";
import { useHistory } from "react-router-dom";

import useStyles from "./style";

const imgWidth = 200;
const imgHeight = 300;

export default function Person(props) {
    const classes = useStyles({ imgWidth, imgHeight });
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
                    {props.known_for &&
                        props.known_for.map((item) => (
                            <Typography key={item.id}>
                                {item.title || item.name}.
                            </Typography>
                        ))}
                </Box>
            </Box>
            <Box className={classes.type} component="span">
                {props.type}
            </Box>
        </Box>
    );
}
