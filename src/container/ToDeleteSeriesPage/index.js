import React, { useState, useEffect } from "react";
import { getSeries, getFilteredSeries } from "../../Components/API";
import SeriesPage from "../../presentation/SeriesPage";

export default function SeriesPageContainer({ variant = "popular" }) {
    const [seriesArray, setSeriesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [seriesPagination, setSeriesPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });

    useEffect(() => {
        setIsLoading(true);
        getSeries(variant, seriesPagination.page).then((data) => {
            setSeriesArray(data.results);
            setSeriesPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
            setIsLoading(false);
        });
    }, [seriesPagination.page, variant]);

    const [filter, setFilter] = useState({
        genre: "",
        rating: "",
        year: "",
    });

    useEffect(() => {
        setIsLoading(true);
        getFilteredSeries(filter.genre, filter.rating, filter.year).then(
            (data) => {
                setSeriesArray(data.results);
                setSeriesPagination({
                    page: data.page,
                    total_results: data.total_results,
                    total_pages: data.total_pages,
                });
                setIsLoading(false);
            }
        );
    }, [filter]);

    const handlePageChange = (value) => {
        setSeriesPagination({ ...seriesPagination, page: value });
    };

    const handleFilter = (genre, rating, year) => {
        setFilter({ genre, rating, year });
    };

    return (
        <SeriesPage
            list={seriesArray}
            type="tv"
            page={seriesPagination.page}
            total_results={seriesPagination.total_results}
            total_pages={seriesPagination.total_pages}
            handlePageChange={handlePageChange}
            handleFilter={handleFilter}
            isLoading={isLoading}
        />
    );
}
