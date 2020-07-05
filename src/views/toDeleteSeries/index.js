import React, { useState, useEffect } from "react";
import { getSeries, getFilteredSeries } from "../../Components/API";
import SeriesList from "../../Components/PaginatedList";
import Filter from "../../Components/Filter";
import { Container, Box, Grid } from "@material-ui/core";

export default function Series({ variant = "popular" }) {
    const [seriesArray, setSeriesArray] = useState([]);
    const [seriesPagination, setSeriesPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });

    useEffect(() => {
        getSeries(variant, seriesPagination.page).then((data) => {
            setSeriesArray(data.results);
            setSeriesPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        });
    }, [seriesPagination.page, variant]);

    const [filter, setFilter] = useState({
        genre: "",
        rating: "",
        year: "",
    });

    useEffect(() => {
        getFilteredSeries(filter.genre, filter.rating, filter.year).then(
            (data) => {
                setSeriesArray(data.results);
                setSeriesPagination({
                    page: data.page,
                    total_results: data.total_results,
                    total_pages: data.total_pages,
                });
            }
        );
    }, [filter]);

    const handlePageChange = (value) => {
        setSeriesPagination({ ...seriesPagination, page: value });
    };

    const handleFilter = (genre, rating, year) => {
        setFilter({ genre, rating, year });
    };

    return (
        <Container maxWidth="lg">
            <Box my={5}>
                <Grid container alignItems="baseline">
                    <Grid item xs={9}>
                        <SeriesList
                            list={seriesArray}
                            type="serie"
                            page={seriesPagination.page}
                            total_results={seriesPagination.total_results}
                            total_pages={seriesPagination.total_pages}
                            handlePageChange={handlePageChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Filter handleFilter={handleFilter} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
