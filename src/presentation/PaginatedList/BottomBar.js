import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export default function BottomBar({ page, total, type, handlePageChange }) {
    const handleChange = (event, value) => {
        event.preventDefault();
        handlePageChange(value);
    };
    return (
        <Box bgcolor="grey.200" my={3} pl={1} mr={2} py={1}>
            <Grid container alignItems="center" justify="flex-end">
                <Grid item>
                    <Typography color="textPrimary">
                        Page {page} of {total}:
                    </Typography>
                </Grid>
                <Grid item>
                    <Pagination
                        color="secondary"
                        shape="rounded"
                        size="small"
                        count={total}
                        page={page}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
