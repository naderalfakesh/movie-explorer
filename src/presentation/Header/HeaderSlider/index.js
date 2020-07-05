import React, { useState, useEffect } from "react";
import { Container,Box } from "@material-ui/core";
import { getMovies } from "../../../Components/API";
import MovieCard from "../../MediaCard";
import Slider from "../../../Components/Slider";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
};

export default function HeaderSlider() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovies("upcoming").then((json) => setMovieList(json.results));
    }, []);
    return (
        <Container maxWidth="lg">
            <Box mt={3} pb={2}>
                <Slider {...settings}>
                    {movieList.map((movie) => (
                        <MovieCard {...movie} key={movie.title} />
                    ))}
                </Slider>
            </Box>
        </Container>
    );
}
