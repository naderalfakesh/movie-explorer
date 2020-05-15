import React from "react";
import Slider from "../../Components/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
};
const imgWidth = 200;
const imgHeight = 300;

const useStyles = makeStyles((theme) => ({
    img: {
        height: imgHeight,
        width: imgWidth,
    },
}));

export default function HeaderSlider() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Box mt={3}>
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
        </Container>
    );
}
