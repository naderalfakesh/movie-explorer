import React, { useState } from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../../Components/Slider";
import MovieCard from "../../views/MediaCard";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
};

const useStyles = makeStyles((theme) => ({
    hover: {
        "&:hover": {
            color: "#dd003f",
        },
    },
}));

export default function HomeSection({
    title = "Title",
    link = "3",
    type = "movie",
    list = [],
    variantList = [],
    handleChange,
}) {
    const classes = useStyles();
    const [activeVariant, setActiveVariant] = useState(variantList[0]);
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
                    {variantList.map((variant) => (
                        <Grid item key={variant}>
                            <Link
                                className={classes.hover}
                                color={
                                    activeVariant == variant
                                        ? "textSecondary"
                                        : "textPrimary"
                                }
                                href={link}
                                variant="subtitle1"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setActiveVariant(variant);
                                    handleChange(variant);
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
