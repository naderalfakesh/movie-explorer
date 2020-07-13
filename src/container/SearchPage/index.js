import React, { useState, useEffect } from "react";
import { search ,getFilteredMovies} from "../../Components/API";
import MoviesPage from "../../presentation/MoviesPage";
import { useParams } from "react-router-dom";

export default function SearchPageContainer() {
    const { type,query } = useParams();
    console.log(type,query)
    const [resultsArray, setResultsArray] = useState([]);

    const [resultsPagination, setResultsPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });

    useEffect(() => {
        search(type,query, resultsPagination.page).then((data) => {
            setResultsArray(data.results);
            setResultsPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        });
    }, [resultsPagination.page, type,query]);

    const [filter, setFilter] = useState({
        genre: "",
        rating: "",
        year: "",
    });

    useEffect(() => {
        getFilteredMovies(filter.genre, filter.rating, filter.year).then(
            (data) => {
                setResultsArray(data.results);
                setResultsPagination({
                    page: data.page,
                    total_results: data.total_results,
                    total_pages: data.total_pages,
                });
            }
        );
    }, [filter]);

    const handlePageChange = (value) => {
        setResultsPagination({ ...resultsPagination, page: value });
    };
    const handleFilter = (genre, rating, year) => {
        setFilter({ genre, rating, year });
    };
    return (
        <MoviesPage
            list={resultsArray}
            type="movie"
            page={resultsPagination.page}
            total_results={resultsPagination.total_results}
            total_pages={resultsPagination.total_pages}
            handlePageChange={handlePageChange}
            handleFilter={handleFilter}
        />
    );
}
