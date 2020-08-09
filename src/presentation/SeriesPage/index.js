import React from "react";
import SeriesList from "../PaginatedList";
import Filter from "../Filter";
import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    reverse: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row-reverse",
        },
    },
}));
export default function SeriesPage({
    list,
    type,
    page,
    total_results,
    total_pages,
    handlePageChange,
    handleFilter,
    isLoading = false,
}) {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Box my={5}>
                <Grid
                    container
                    alignItems="baseline"
                    className={classes.reverse}
                >
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <SeriesList
                            list={list}
                            type={type}
                            page={page}
                            total_results={total_results}
                            total_pages={total_pages}
                            handlePageChange={handlePageChange}
                            isLoading={isLoading}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Filter handleFilter={handleFilter} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
