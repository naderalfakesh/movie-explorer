import React, { useState, useEffect } from "react";
import { getMovies, getSeries, getTrendingPersons } from "../../Components/API";
import HomePage from "../../presentation/HomePage";

const MOVIES_VARIANTS = ["popular", "top_rated", "upcoming"];
const SERIES_VARIANTS = ["popular", "top_rated", "airing_today", "on_the_air"];

export default function HomePageContainer() {
    const [movieList, setMovieList] = useState([]);
    const [movieIsLoading, setMovieIsLoading] = useState(false);
    const [tvList, setTvList] = useState([]);
    const [tvIsLoading, setTVIsLoading] = useState(false);
    const [personsList, setPersonsList] = useState([]);
    const [personIsLoading, setPersonIsLoading] = useState(false);
    const [moviesActiveVariant, setMoviesActiveVariant] = useState(
        MOVIES_VARIANTS[0]
    );
    const [seriesActiveVariant, setSeriesActiveVariant] = useState(
        SERIES_VARIANTS[0]
    );

    useEffect(() => {
        setMovieIsLoading(true);
        setTVIsLoading(true);
        setPersonIsLoading(true);
        getMovies("popular").then((json) => {
            setMovieList(json.results);
            setMovieIsLoading(false);
        });
        getSeries("popular").then((json) => {
            setTvList(json.results);
            setTVIsLoading(false);
        });
        getTrendingPersons().then((data) => {
            setPersonsList(data.results.slice(0, 4));
            setPersonIsLoading(false);
        });
    }, []);

    const handleVariantChange = (type = "movie", variant = "popular") => {
        if (type === "tv") {
            setTVIsLoading(true);
            getSeries(variant).then((json) => {
                setTvList(json.results);
                setTVIsLoading(false);
            });
            setSeriesActiveVariant(variant);
        } else {
            setMovieIsLoading(true);
            getMovies(variant).then((json) => {
                setMovieList(json.results);
                setMovieIsLoading(false);
            });
            setMoviesActiveVariant(variant);
        }
    };
    return (
        <HomePage
            movies={movieList}
            moviesVariants={MOVIES_VARIANTS}
            moviesActiveVariant={moviesActiveVariant}
            movieIsLoading={movieIsLoading}
            series={tvList}
            seriesVariants={SERIES_VARIANTS}
            seriesActiveVariant={seriesActiveVariant}
            tvIsLoading={tvIsLoading}
            handleVariantChange={handleVariantChange}
            persons={personsList}
            personIsLoading={personIsLoading}
        />
    );
}
