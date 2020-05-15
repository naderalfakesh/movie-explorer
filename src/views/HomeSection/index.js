import React from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../../Components/Slider";

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
}));

export default function HomeSection({ title = "Title", link = "3" }) {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="space-between" alignItems="baseline">
                <Grid item>
                    <Typography variant="h3" component="h2">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Link href={link}>VIEW ALL ></Link>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item>
                    <Link href={link}>#MOST REVIEWED</Link>
                </Grid>
                <Grid item>
                    <Link href={link}>#MOST REVIEWED</Link>
                </Grid>
                <Grid item>
                    <Link href={link}>#MOST REVIEWED</Link>
                </Grid>
                <Grid item>
                    <Link href={link}>#MOST REVIEWED</Link>
                </Grid>
            </Grid>
            <Box>
                <Slider {...settings}>
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                    <img
                        className={classes.img}
                        src={`https://via.placeholder.com/${imgWidth}x${imgHeight}`}
                        alt="movie poster"
                    />
                </Slider>
            </Box>
        </div>
    );
}
