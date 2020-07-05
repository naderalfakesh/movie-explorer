import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import HomeSection from "./HomeSection";
import HomeSideBar from "./HomeSideBar";
import { getMovies, getSeries } from "../../Components/API";

export default function Header() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovies("popular").then((json) => setMovieList(json.results));
    }, []);
    const [tvList, setTvList] = useState([]);
    useEffect(() => {
        getSeries("popular").then((json) => setTvList(json.results));
    }, []);
    const handleMoviesChange = (variant) => {
        getMovies(variant).then((json) => setMovieList(json.results));
    };
    const handleSeriesChange = (variant) => {
        getSeries(variant).then((json) => setTvList(json.results));
    };
    return (
        <Container maxWidth="lg">
            <Box my={10}>
                <Grid container justify="space-between" alignItems="baseline">
                    <Grid item xs={8}>
                        <HomeSection
                            title="Movies"
                            link="/movies"
                            type="movie"
                            list={movieList}
                            variantList={["popular", "top_rated", "upcoming"]}
                            handleChange={handleMoviesChange}
                        />
                        <HomeSection
                            title="Series"
                            link="/series"
                            type="serie"
                            list={tvList}
                            variantList={[
                                "popular",
                                "top_rated",
                                "airing_today",
                                "on_the_air",
                            ]}
                            handleChange={handleSeriesChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Box pl={5}>
                            <HomeSideBar />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
