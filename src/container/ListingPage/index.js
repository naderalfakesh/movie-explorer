import React, { useState, useEffect } from "react";
import { getList, getFilteredList } from "../../Components/API";
import ListingPage from "../../presentation/ListingPage";

export default function ListingPageContainer({ variant = "popular", type }) {
    const [itemList, setItemList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });
    const [filter, setFilter] = useState({
        active: false,
        genre: "",
        rating: "",
        year: "",
    });
    useEffect(() => {
        return () => {
            setFilter({
                active: false,
                genre: "",
                rating: "",
                year: "",
            });
            setPagination((p) => ({ ...p, page: 1 }));
        };
    }, [variant, type]);

    useEffect(() => {
        if (!filter.active) {
            setIsLoading(true);
            getList(variant, pagination.page, type)
                .then((data) => {
                    setItemList(data.results);
                    setPagination((p) => ({
                        ...p,
                        total_results: data.total_results,
                        total_pages: data.total_pages,
                    }));
                    setIsLoading(false);
                })
                .catch(setItemList([]));
        }
    }, [pagination.page, type, variant, filter.active]);

    useEffect(() => {
        if (filter.active) {
            setIsLoading(true);
            getFilteredList(
                filter.genre,
                filter.rating,
                filter.year,
                type,
                pagination.page
            )
                .then((data) => {
                    setItemList(data.results);
                    setPagination((p) => ({
                        ...p,
                        total_results: data.total_results,
                        total_pages: data.total_pages,
                    }));
                    setIsLoading(false);
                })
                .catch(setItemList([]));
        }
    }, [pagination.page, type, variant, filter]);

    const handlePageChange = (value) => {
        setPagination({ ...pagination, page: value });
    };

    const handleFilter = (genre, rating, year) => {
        setFilter({ active: true, genre, rating, year });
    };
    return (
        <ListingPage
            list={itemList}
            type={type}
            page={pagination.page}
            total_results={pagination.total_results}
            total_pages={pagination.total_pages}
            handlePageChange={handlePageChange}
            handleFilter={handleFilter}
            filterReset={!filter.active}
            isLoading={isLoading}
        />
    );
}
