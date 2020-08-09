import React from "react";
import MoviesList from "../PaginatedList";
import Filter from "../Filter";
import { Container, Box, Grid } from "@material-ui/core";

export default function MoviesPage({
    list,
    type,
    page,
    total_results,
    total_pages,
    handlePageChange,
    handleFilter,
    isLoading = false,
}) {
    return (
        <Container maxWidth="lg">
            <Box my={5}>
                <Grid container alignItems="baseline">
                    <Grid item xs={9}>
                        <MoviesList
                            list={list}
                            type={type}
                            page={page}
                            total_results={total_results}
                            total_pages={total_pages}
                            handlePageChange={handlePageChange}
                            isLoading={isLoading}
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
