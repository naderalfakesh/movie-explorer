import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    blue: {
        color: theme.palette.text.hint,
    },
}));

export default function TopBar({ total, type }) {
    const classes = useStyles();
    return (
        <Box bgcolor="grey.200" mb={3} py={1} pl={1} mr={2}>
            <Typography>
                Found <span className={classes.blue}>{total + " " + type}</span>{" "}
                in total
            </Typography>
        </Box>
    );
}
