import React from "react";
import { Container, Box } from "@material-ui/core";
import MediaCard from "../../../container/MediaCard";
import MediaCardSkeleton from "../../MediaCard/MediaCardSkeleton";
import Slider from "../../../Components/Slider";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    timeout: 3000,
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

export default function HeaderSlider({ movieList, isLoading }) {
    return (
        <Container maxWidth="lg">
            <Box mt={3} pb={2}>
                <Slider {...settings}>
                    {isLoading
                        ? [0, 1, 2, 3].map((item, index) => (
                              <MediaCardSkeleton key={index} />
                          ))
                        : movieList.map((movie) => (
                              <MediaCard {...movie} key={movie.title} />
                          ))}
                </Slider>
            </Box>
        </Container>
    );
}
