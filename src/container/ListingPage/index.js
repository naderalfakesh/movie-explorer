import React, { useState, useEffect } from "react";
import { getList, getFilteredList } from "../../Components/API";
import SeriesPage from "../../presentation/SeriesPage";
import MoviesPage from "../../presentation/MoviesPage";
import CastPage from "../../presentation/CastPage";

export default function DetailsPageContainer({ variant = "popular", type }) {
    const [itemList, setItemList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });
    const [filter, setFilter] = useState({
        genre: "",
        rating: "",
        year: "",
    });

    useEffect(() => {
        setIsLoading(true);
        getList(variant, pagination.page, type).then((data) => {
            setItemList(data.results);
            setPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
            setIsLoading(false);
        });
    }, [pagination.page, type, variant]);

    useEffect(() => {
        setIsLoading(true);
        getFilteredList(filter.genre, filter.rating, filter.year, type).then(
            (data) => {
                setItemList(data.results);
                setPagination({
                    page: data.page,
                    total_results: data.total_results,
                    total_pages: data.total_pages,
                });
                setIsLoading(false);
            }
        );
    }, [filter]);

    const handlePageChange = (value) => {
        setPagination({ ...pagination, page: value });
    };

    const handleFilter = (genre, rating, year) => {
        setFilter({ genre, rating, year });
    };

    if (type === "tv") {
        return (
            <SeriesPage
                list={itemList}
                type="tv"
                page={pagination.page}
                total_results={pagination.total_results}
                total_pages={pagination.total_pages}
                handlePageChange={handlePageChange}
                handleFilter={handleFilter}
                isLoading={isLoading}
            />
        );
    }
    if (type === "movie") {
        return (
            <MoviesPage
                list={itemList}
                type="movie"
                page={pagination.page}
                total_results={pagination.total_results}
                total_pages={pagination.total_pages}
                handlePageChange={handlePageChange}
                handleFilter={handleFilter}
                isLoading={isLoading}
            />
        );
    } else {
        return (
            <CastPage
                list={itemList}
                type="person"
                page={pagination.page}
                total_results={pagination.total_results}
                total_pages={pagination.total_pages}
                handlePageChange={handlePageChange}
                isLoading={isLoading}
            />
        );
    }
}
