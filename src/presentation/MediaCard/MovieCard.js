import React from "react";
import { Typography, Box, Chip } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { imageBaseURL } from "../../Components/API/constants";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import genres from "../../Components/API/genres";
import useStyles from "./style";

const imgWidth = 200;
const imgHeight = 300;

export default function MediaCard(props) {
    const classes = useStyles({ imgWidth, imgHeight });
    let history = useHistory();
    const { type = "movie" } = props;
    let genre = [];
    if (props.genre_ids) {
        genre = genre.push(
            genres.find((item) => item.id === props.genre_ids[0]) || {
                name: "Action",
            }
        );
    }
    const ratingCalc = (vote) => {
        const ratignOfFvie = Math.floor(vote / 2);
        const result = [];
        for (let i = 0; i < ratignOfFvie; i++) {
            result.push(
                <StarIcon className={classes.rating} key={Math.random()} />
            );
        }
        for (let i = 0; i < 5 - ratignOfFvie; i++) {
            result.push(
                <StarBorderIcon
                    className={classes.rating}
                    key={Math.random()}
                />
            );
        }
        return result;
    };
    return (
        <Box
            className={classes.card}
            onClick={() => history.push(`/${type}/${props.id}`)}
        >
            <Box className={classes.poster}>
                {props.poster_path && (
                    <img
                        className={classes.posterImg}
                        src={`${imageBaseURL(300)}${props.poster_path}`}
                        alt={props.title || props.name}
                        key={props.title || props.name}
                    />
                )}
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
                        ? props.release_date && props.release_date.slice(0, 4)
                        : props.first_air_date &&
                          props.first_air_date.slice(0, 4)}
                </Typography>
                <Box mb={1}>{ratingCalc(props.vote_average)}</Box>
                <Box className={classes.tags} mb={2}>
                    {genre.length >= 0 && (
                        <Chip
                            color="secondary"
                            label={genre.name}
                            size="small"
                        />
                    )}
                </Box>
                <Box className={classes.info}>
                    <Typography>
                        {props.overview && props.overview.slice(0, 90)}...
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.type} component="span">
                {props.type}
            </Box>
        </Box>
    );
}
