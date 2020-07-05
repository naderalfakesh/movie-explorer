import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    hover: {
        "&:hover": {
            color: theme.palette.success.main,
            transition: "0.5s",
            textDecoration: "none",
        },
    },
    padding: {
        paddingBottom: theme.spacing(0.5),
    },
}));

export default function FooterLink({ link = "#", label = "label" }) {
    const classes = useStyles();
    return (
        <Typography variant="body1" className={classes.padding}>
            <Link href={link} color="textPrimary" className={classes.hover}>
                {label}
            </Link>
        </Typography>
    );
}
