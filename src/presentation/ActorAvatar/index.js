import React from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";
import { Link as routerLink } from "react-router-dom";
import BackToTop from "../BackToTop";

export default function ActorAvatar({
    name = "Unknown actor",
    profession = "Actor",
    img = "https://via.placeholder.com/75",
    link = "#",
    knownFor = "Popular movie",
}) {
    return (
        <Box>
            <Link component={routerLink} to={link} onClick={() => BackToTop()}>
                <Grid container spacing={3} alignItems={"center"}>
                    <Grid item>
                        <img src={img} alt={name} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="h3">
                            {name}
                        </Typography>
                        <Typography variant="caption" component="h4">
                            {profession}
                        </Typography>
                        <Typography variant="caption" component="h4">
                            {knownFor}
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </Box>
    );
}
