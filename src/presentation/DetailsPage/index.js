import React from "react";
import Movie from "./Movie";
import Tv from "./Tv";
import Person from "./Person";

export default function DetailsPage({ data, type }) {
    if (!data) {
        return <div>Loading .... </div>;
    } else {
        switch (type) {
            case "movie":
                return <Movie data={data} />;
            case "tv":
                return <Tv data={data} />;
            case "person":
                return <Person data={data} />;
            default:
                break;
        }
    }
}
