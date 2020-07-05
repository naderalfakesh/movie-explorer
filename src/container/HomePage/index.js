import React, { useState, useEffect } from "react";
import { getMovies, getSeries } from "../../Components/API";
import HomePage from "../../presentation/HomePage"

const MOVIES_VARIANTS= ["popular", "top_rated", "upcoming"];
const SERIES_VARIANTS= ["popular","top_rated","airing_today","on_the_air"];

export default function HomePageContainer() {
    const [movieList, setMovieList] = useState([]);
    const [tvList, setTvList] = useState([]);
    const [moviesActiveVariant, setMoviesActiveVariant] = useState(MOVIES_VARIANTS[0]);
    const [seriesActiveVariant, setSeriesActiveVariant] = useState(SERIES_VARIANTS[0]);

    useEffect(() => {
        getMovies("popular").then((json) => setMovieList(json.results));
        getSeries("popular").then((json) => setTvList(json.results));
    }, []);
    const handleVariantChange = (type ="movie",variant="popular") => {
        if(type==="serie"){
            getSeries(variant).then((json) => setTvList(json.results));
            setSeriesActiveVariant(variant)
        }
        else{
            getMovies(variant).then((json) => setMovieList(json.results));
            setMoviesActiveVariant(variant)
        }
    };
    return <HomePage 
    movies={movieList}
    moviesVariants={MOVIES_VARIANTS}
    moviesActiveVariant={moviesActiveVariant}
    series={tvList} 
    seriesVariants={SERIES_VARIANTS}
    seriesActiveVariant={seriesActiveVariant}
    handleVariantChange={handleVariantChange} />
  
}
