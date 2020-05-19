import React from "react";
import { Container, Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
    color: {
        color: "white",
        "&:hover span": {
            transition: "all 0.5s ease-in ",
            color: theme.palette.success.main,
        },
    },
    right: {
        textAlign: "right",
    },
}));

export default function Social() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Box className={classes.right}>
                <Typography className={classes.color} display="inline">
                    FOLLOW US:
                </Typography>
                <IconButton
                    aria-label="facebook"
                    className={classes.color}
                    href="#facebook"
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    aria-label="twitter"
                    className={classes.color}
                    href="#twitter"
                >
                    <TwitterIcon />
                </IconButton>
                <IconButton
                    aria-label="instagram"
                    className={classes.color}
                    href="#instagram"
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    aria-label="youtube"
                    className={classes.color}
                    href="#youtube"
                >
                    <YouTubeIcon />
                </IconButton>
            </Box>
        </Container>
    );
}
