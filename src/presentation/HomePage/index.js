import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import HomeSection from "./HomeSection";
import HomeSideBar from "./HomeSideBar";

export default function HomePage({
    movies,
    moviesVariants,
    moviesActiveVariant,
    series,
    seriesVariants,
    seriesActiveVariant,
    handleVariantChange,
}) {
    return (
        <Container maxWidth="lg">
            <Box my={10}>
                <Grid container justify="space-between" alignItems="baseline">
                    <Grid item xs={8}>
                        <HomeSection
                            title="Movies"
                            link="/movies"
                            type="movie"
                            list={movies}
                            variantList={moviesVariants}
                            activeVariant={moviesActiveVariant}
                            handleChange={handleVariantChange}
                        />
                        <HomeSection
                            title="Series"
                            link="/series"
                            type="serie"
                            list={series}
                            variantList={seriesVariants}
                            activeVariant={seriesActiveVariant}
                            handleChange={handleVariantChange}
                        />
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
