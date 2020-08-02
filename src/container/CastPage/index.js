import React, { useState, useEffect } from "react";
import { getPersons } from "../../Components/API";
import CastPage from "../../presentation/CastPage";

export default function CastPageContainer({ variant = "popular" }) {
    const [personsArray, setPersonsArray] = useState([]);
    const [personsPagination, setPersonsPagination] = useState({
        page: 1,
        total_results: 0,
        total_pages: 0,
    });

    useEffect(() => {
        getPersons(personsPagination.page).then((data) => {
            setPersonsArray(data.results);
            setPersonsPagination({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        });
    }, [personsPagination.page, variant]);

    const handlePageChange = (value) => {
        setPersonsPagination({ ...personsPagination, page: value });
    };

    return (
        <CastPage
            list={personsArray}
            type="person"
            page={personsPagination.page}
            total_results={personsPagination.total_results}
            total_pages={personsPagination.total_pages}
            handlePageChange={handlePageChange}
        />
    );
}
