import React, { useState, useEffect } from "react";
import { search } from "../../Components/API";
import MoviesPage from "../../presentation/SearchPage";
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
        search(type , query , resultsPagination.page).then((data) => {
            setResultsArray(data.results);
            setResultsPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        });
    }, [resultsPagination.page, type,query]);

    const handlePageChange = (value) => {
        setResultsPagination({ ...resultsPagination, page: value });
    };
    return (
        <MoviesPage
            list={resultsArray}
            type={type}
            page={resultsPagination.page}
            total_results={resultsPagination.total_results}
            total_pages={resultsPagination.total_pages}
            handlePageChange={handlePageChange}
        />
    );
}
