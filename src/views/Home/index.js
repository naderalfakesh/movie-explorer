import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import HomeSection from "../HomeSection";
import HomeSideBar from "../HomeSideBar";
import { fetchAPI } from "../../Components/API/Movies";

export default function Header() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        fetchAPI("movie", "popular").then((json) => setMovieList(json.results));
    }, []);
    const [tvList, setTvList] = useState([]);
    useEffect(() => {
        fetchAPI("tv", "popular").then((json) => setTvList(json.results));
    }, []);
    return (
        <Container maxWidth="lg">
            <Box my={10}>
                <Grid container justify="space-between" alignItems="baseline">
                    <Grid item xs={8}>
                        <HomeSection
                            title="Movies"
                            link="/movies"
                            list={movieList}
                        />
                        <HomeSection
                            title="Series"
                            link="/series"
                            list={tvList}
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
