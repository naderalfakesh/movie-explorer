import React from "react";
import { Typography, Link, Box, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BG from "../../assets/footerBG.jpg";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: "50vh",
        background: `url(${BG})`,
        backgroundSize: "contain",
        color: "white",
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box py={5} className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid container justify="space-between">
                    <Grid item>
                        <img src={logo} alt="logo" width="100" />
                        <Typography>
                            5th Avenue st, manhattan New York, NY 10001
                        </Typography>
                        <Typography>Call us: (+01) 202 342 6789</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Title</Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Title</Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Title</Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                        <Typography>
                            <Link>Link</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Title</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
