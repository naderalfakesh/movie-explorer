import React from "react";
import { Typography, Link, Box, Grid } from "@material-ui/core";

export default function ActorAvatar({
    name = "Nader Alfakesh",
    profession = "Actor",
    img = "https://via.placeholder.com/75",
    link = "#",
}) {
    return (
        <Box my={3}>
            <Link href={link}>
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
                    </Grid>
                </Grid>
            </Link>
        </Box>
    );
}
