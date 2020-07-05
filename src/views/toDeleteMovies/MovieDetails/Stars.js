import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rating: {
        "& > svg": {
            marginRight: theme.spacing(0.5),
        },
    },
}));
export default function Stars({ rating = 8 }) {
    const classes = useStyles();
    const filledStars = Math.floor(rating / 2);
    const emptyStars = 5 - filledStars;
    const filledStarsArray = new Array(filledStars).fill("Full");
    const emptyStarsArray = new Array(emptyStars).fill("empty");
    return (
        <div className={classes.rating}>
            {filledStarsArray.map((star) => (
                <StarIcon key={Math.random()} style={{ color: "#FFD700" }} />
            ))}
            {emptyStarsArray.map((star) => (
                <StarIcon key={Math.random()} style={{ color: "#ddd" }} />
            ))}
        </div>
    );
}
