import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import HomeSection from "./HomeSection";
import HomeSideBar from "./HomeSideBar";

export default function HomePage({
    movies,
    moviesVariants,
    moviesActiveVariant,
    movieIsLoading,
    series,
    seriesVariants,
    seriesActiveVariant,
    tvIsLoading,
    handleVariantChange,
    persons,
    personIsLoading,
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
                            isLoading={movieIsLoading}
                            key={1}
                        />
                        <HomeSection
                            title="Series"
                            link="/series"
                            type="tv"
                            list={series}
                            variantList={seriesVariants}
                            activeVariant={seriesActiveVariant}
                            handleChange={handleVariantChange}
                            isLoading={tvIsLoading}
                            key={2}
                        />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Box pl={5}>
                            <HomeSideBar
                                persons={persons}
                                isLoading={personIsLoading}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
