import React from "react";
import NavLink from "./NavLink";

export default function Navlinks() {
    return (
        <div>
            {list.map((link, i) => (
                <NavLink
                    key={link.url}
                    url={link.url}
                    name={link.name}
                    subList={link.subList}
                />
            ))}
        </div>
    );
}

const list = [
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
            { name: "Most recent", url: "/series/recent" },
            { name: "Most popular", url: "/series/popular" },
            { name: "Best rated", url: "/series/rated" },
        ],
    },
    {
        name: "Cast",
        url: "/cast",
        subList: [
            { name: "Most recent", url: "/cast/recent" },
            { name: "Most popular", url: "/cast/popular" },
            { name: "Best rated", url: "/cast/rated" },
        ],
    },
];
