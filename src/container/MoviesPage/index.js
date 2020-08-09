import React, { useState, useEffect } from "react";
import { getMovies, getFilteredMovies } from "../../Components/API";
import MoviesPage from "../../presentation/MoviesPage";

export default function MoviesPageContainer({ variant = "popular" }) {
    const [moviesArray, setMoviesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [moviesPagination, setMoviesPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });

    useEffect(() => {
        setIsLoading(true);
        getMovies(variant, moviesPagination.page).then((data) => {
            setMoviesArray(data.results);
            setMoviesPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
            setIsLoading(false);
        });
    }, [moviesPagination.page, variant]);

    const [filter, setFilter] = useState({
        genre: "",
        rating: "",
        year: "",
    });

    useEffect(() => {
        setIsLoading(true);
        getFilteredMovies(filter.genre, filter.rating, filter.year).then(
            (data) => {
                setMoviesArray(data.results);
                setMoviesPagination({
                    page: data.page,
                    total_results: data.total_results,
                    total_pages: data.total_pages,
                });
                setIsLoading(false);
            }
        );
    }, [filter]);

    const handlePageChange = (value) => {
        setMoviesPagination({ ...moviesPagination, page: value });
    };
    const handleFilter = (genre, rating, year) => {
        setFilter({ genre, rating, year });
    };
    return (
        <MoviesPage
            list={moviesArray}
            type="movie"
            page={moviesPagination.page}
            total_results={moviesPagination.total_results}
            total_pages={moviesPagination.total_pages}
            handlePageChange={handlePageChange}
            handleFilter={handleFilter}
            isLoading={isLoading}
        />
    );
}
