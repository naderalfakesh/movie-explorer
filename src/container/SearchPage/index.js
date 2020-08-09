import React, { useState, useEffect } from "react";
import { search } from "../../Components/API";
import SearchPage from "../../presentation/SearchPage";
import { useParams } from "react-router-dom";

export default function SearchPageContainer() {
    const { type, query } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [resultsArray, setResultsArray] = useState([]);

    const [resultsPagination, setResultsPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });

    useEffect(() => {
        setIsLoading(true);
        search(type, query, resultsPagination.page).then((data) => {
            setResultsArray(data.results);
            setResultsPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
            setIsLoading(false);
        });
    }, [resultsPagination.page, type, query]);

    const handlePageChange = (value) => {
        setResultsPagination({ ...resultsPagination, page: value });
    };
    return (
        <SearchPage
            list={resultsArray}
            searchType={type}
            page={resultsPagination.page}
            total_results={resultsPagination.total_results}
            total_pages={resultsPagination.total_pages}
            handlePageChange={handlePageChange}
            isLoading={isLoading}
        />
    );
}
