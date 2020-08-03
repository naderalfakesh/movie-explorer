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
    persons,
}) {
    return (
        <Container maxWidth="lg">
            <Box my={10}>
                <Grid container justify="space-between" alignItems="baseline">
                    <Grid item lg={8} md={12} sm={12} xs={12}>
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
                            type="tv"
                            list={series}
                            variantList={seriesVariants}
                            activeVariant={seriesActiveVariant}
                            handleChange={handleVariantChange}
                        />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Box pl={5}>
                            <HomeSideBar persons={persons} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
