import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../presentation/Header";

export default function HeaderContainer() {
    let history = useHistory();
    const handleSearch = (type, query) => {
        history.push(`/search/${type}/${query}`);
    };

    return <Header handleSearch={handleSearch} linksList={linksList} />;
}

const linksList = [
    { name: "Home", url: "/", subList: [] },
    {
        name: "Movies",
        url: "/movies",
        subList: [
            { name: "Most recent", url: "/movies/recent" },
            { name: "Most popular", url: "/movies/popular" },
            { name: "Best rated", url: "/movies/rated" },
        ],
    },
    {
        name: "Tv shows",
        url: "/series",
        subList: [
            { name: "On Air", url: "/series/on_air" },
            { name: "Most popular", url: "/series/popular" },
            { name: "Best rated", url: "/series/rated" },
        ],
    },
    {
        name: "Cast",
        url: "/cast",
        subList: [],
    },
];
