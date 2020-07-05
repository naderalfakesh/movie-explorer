import React from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../../../Components/Slider";
import MovieCard from "../../MediaCard";
import { Link as routerLink } from "react-router-dom";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
};

const useStyles = makeStyles((theme) => ({
    hover: {
        "&:hover": {
            color: "#dd003f",
            transition: "0.5s",
        },
    },
}));

export default function HomeSection({
    title = "Title",
    link = "#",
    type = "movie",
    list = [],
    variantList = [],
    activeVariant,
    handleChange,
}) {
    const classes = useStyles();
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
                        component={routerLink}
                        className={classes.hover}
                        color="textPrimary"
                        to={link}
                        variant="h6"
                    >
                        VIEW ALL >
                    </Link>
                </Grid>
            </Grid>
            <Box my={3}>
                <Grid container spacing={2}>
                    {variantList.map((variant) => (
                        <Grid item key={variant}>
                            <Link
                                className={classes.hover}
                                color={
                                    activeVariant === variant
                                        ? "textSecondary"
                                        : "textPrimary"
                                }
                                href={link}
                                variant="subtitle1"
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleChange(type,variant);
                                }}
                            >
                                #{variant.toUpperCase()}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Slider {...settings}>
                    {list.map((movie) => (
                        <MovieCard
                            {...movie}
                            key={movie.original_title}
                            type={type}
                        />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}
