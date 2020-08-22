import React from "react";
import PaginatedList from "../PaginatedList";
import Filter from "../Filter";
import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    reverse: {
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row-reverse",
        },
    },
}));
export default function ListingPage({
    list,
    type,
    page,
    total_results,
    total_pages,
    handlePageChange,
    filterReset,
    handleFilter,
    isLoading = false,
}) {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Box my={10} minHeight="100vh">
                <Grid
                    container
                    alignItems="baseline"
                    className={classes.reverse}
                    spacing={3}
                >
                    {type !== "person" && (
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Filter
                                handleFilter={handleFilter}
                                filterReset={filterReset}
                            />
                        </Grid>
                    )}
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <PaginatedList
                            list={list}
                            type={type}
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
