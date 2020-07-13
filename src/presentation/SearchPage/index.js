import React from "react";
import MoviesList from "../PaginatedList";
import { Container, Box, Grid } from "@material-ui/core";

export default function SearchPage({
    list,
    type,
    page,
    total_results,
    total_pages,
    handlePageChange,
}) {
    return (
        <Container maxWidth="lg">
            <Box my={5}>
                <Grid container alignItems="baseline">
                    <Grid item xs={12}>
                        <MoviesList
                            list={list}
                            type={type}
                            page={page}
                            total_results={total_results}
                            total_pages={total_pages}
                            handlePageChange={handlePageChange}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
