import React, { useState, useEffect } from "react";
import Slider from "../../Components/Slider";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { getMovies } from "../../Components/API";
import MovieCard from "../Movies/MediaCard";

const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
};

export default function HeaderSlider() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovies("now_playing").then((json) => setMovieList(json.results));
    }, []);
    return (
        <Container maxWidth="lg">
            <Box mt={3}>
                <Slider {...settings}>
                    {movieList.map((movie) => (
                        <MovieCard {...movie} key={movie.title} />
                    ))}
                </Slider>
            </Box>
        </Container>
    );
}
