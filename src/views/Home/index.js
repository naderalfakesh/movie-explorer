import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import HomeSection from "../HomeSection";
import HomeSideBar from "../HomeSideBar";

export default function Header() {
    return (
        <Container maxWidth="lg">
            <Box my={10}>
                <Grid container justify="space-between">
                    <Grid item xs={8}>
                        <HomeSection />
                        <HomeSection />
                    </Grid>
                    <Grid item xs={4}>
                        <Box pl={5}>
                            <HomeSideBar />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
