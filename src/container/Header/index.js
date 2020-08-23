import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../presentation/Header";
import { getList } from "../../Components/API";

export default function HeaderContainer() {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getList("upcoming", 1, "movie")
            .then((data) => {
                setMovieList(data.results);
                setIsLoading(false);
            })
            .catch(console.log);
    }, []);

    let history = useHistory();

    const handleSearch = (type, query) => {
        history.push(`/search/${type}/${query}`);
    };

    return (
        <Header
            handleSearch={handleSearch}
            linksList={linksList}
            movieList={movieList}
            isLoading={isLoading}
        />
    );
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
