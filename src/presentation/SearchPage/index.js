import React from "react";
import PaginatedList from "../PaginatedList";
import { Container, Box, Grid } from "@material-ui/core";

export default function SearchPage({
    list,
    searchType,
    page,
    total_results,
    total_pages,
    handlePageChange,
    isLoading = false,
}) {
    return (
        <Container maxWidth="lg">
            <Box my={10} minHeight="100vh">
                <Grid container alignItems="baseline">
                    <Grid item xs={12}>
                        <PaginatedList
                            list={list}
                            type={searchType}
                            searchType={searchType}
                            page={page}
                            total_results={total_results}
                            total_pages={total_pages}
                            handlePageChange={handlePageChange}
                            isLoading={isLoading}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
