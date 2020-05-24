import React from "react";
import { Box, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));
export default function BottomBar({ page, total, type }) {
    const classes = useStyles();
    let pages = [];
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(<Link href={i}>{i}</Link>);
        }
    } else {
        pages.push(<Link href={1}>{1}</Link>);
        pages.push(<Link href={2}>{2}</Link>);
        pages.push(<Link href={3}>{3}</Link>);
        pages.push(<Link href={total - 1}>{total - 1}</Link>);
        pages.push(<Link href={total}>{total}</Link>);
    }
    return (
        <Box bgcolor="grey.200" mt={3} pl={1} mr={2}>
            <Grid container alignItems="center">
                <Grid item>
                    <Typography color="textPrimary">
                        Page {page} of {total}:
                    </Typography>
                </Grid>
                <Grid item>{pages}</Grid>
            </Grid>
        </Box>
    );
}
