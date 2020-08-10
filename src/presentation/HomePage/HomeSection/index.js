import React from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../../../Components/Slider";
import MediaCard from "../../../container/MediaCard";
import MediaCardSkeleton from "../../MediaCard/MediaCardSkeleton";
import { Link as routerLink } from "react-router-dom";
import BackToTop from "../../BackToTop";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    breakpoints: {
        xs: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        sm: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
        md: {
            slidesToShow: 3,
            slidesToScroll: 3,
        },
        lg: {
            slidesToShow: 4,
            slidesToScroll: 4,
        },
    },
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
    isLoading,
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
                        onClick={() => BackToTop()}
                    >
                        VIEW ALL &gt;
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
                                    handleChange(type, variant);
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
                    {isLoading
                        ? new Array(20)
                              .fill(1)
                              .map((item, index) => (
                                  <MediaCardSkeleton key={index} />
                              ))
                        : list.map((item) => (
                              <MediaCard {...item} key={item.id} type={type} />
                          ))}
                </Slider>
            </Box>
        </Box>
    );
}
