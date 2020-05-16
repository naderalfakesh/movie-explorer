import React from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../../Components/Slider";
import { imageBaseURL } from "../../Components/API/constants";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
};
const imgWidth = 150;
const imgHeight = 250;

const useStyles = makeStyles((theme) => ({
    img: {
        height: imgHeight,
        width: imgWidth,
        objectFit: "cover",
    },
    hover: {
        "&:hover": {
            color: "#dd003f",
        },
    },
}));

export default function HomeSection({
    title = "Title",
    link = "3",
    list = [],
}) {
    const classes = useStyles();
    console.log(list);
    return (
        <Box mb={5}>
            <Grid container justify="space-between" alignItems="baseline">
                <Grid item>
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Link
                        className={classes.hover}
                        color="textPrimary"
                        href={link}
                        variant="h6"
                    >
                        VIEW ALL >
                    </Link>
                </Grid>
            </Grid>
            <Box my={3}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Link
                            className={classes.hover}
                            color="textSecondary"
                            href={link}
                            variant="subtitle1"
                        >
                            #POPULAR
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            className={classes.hover}
                            color="textPrimary"
                            href={link}
                            variant="subtitle1"
                        >
                            #COMING SOON
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            className={classes.hover}
                            color="textPrimary"
                            href={link}
                            variant="subtitle1"
                        >
                            #TOP RATED
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            className={classes.hover}
                            color="textPrimary"
                            href={link}
                            variant="subtitle1"
                        >
                            #MOST REVIEWED
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Slider {...settings}>
                    {list.map((movie) => (
                        <img
                            className={classes.img}
                            src={`${imageBaseURL(300)}${movie.poster_path}`}
                            alt={movie.original_title}
                            key={movie.original_title}
                        />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}
