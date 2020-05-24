import React, { useState, useEffect } from "react";
import { getMovies } from "../../Components/API";
import MoviesList from "../../Components/PaginatedList";
import Filter from "../../Components/Filter";
import { Container, Box, Grid } from "@material-ui/core";

export default function Movies() {
    const [moviesArray, setMoviesArray] = useState([]);
    const [moviesPagination, setMoviesPagination] = useState({
        page: 0,
        total_results: 0,
        total_pages: 0,
    });
    useEffect(() => {
        getMovies().then((data) => {
            setMoviesArray(data.results);
            setMoviesPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        });
    }, []);
    return (
        <Container maxWidth="lg">
            <Box my={5}>
                <Grid container>
                    <Grid item xs={9}>
                        <MoviesList
                            list={moviesArray}
                            type="movie"
                            page={moviesPagination.page}
                            total_results={moviesPagination.total_results}
                            total_pages={moviesPagination.total_pages}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Filter />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
