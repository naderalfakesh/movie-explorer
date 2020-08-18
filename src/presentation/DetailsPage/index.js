import React from "react";
import Movie from "./Movie";
import Tv from "./Tv";
import Person from "./Person";
import PageSkeleton from "./PageSkeleton";

export default function DetailsPage({ data, type }) {
    if (!data) {
        return <PageSkeleton />;
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
