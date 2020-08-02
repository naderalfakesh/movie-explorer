import React from "react";
import MovieCard from "../../presentation/MediaCard/MovieCard";
import TvCard from "../../presentation/MediaCard/TvCard";
import PersonCard from "../../presentation/MediaCard/PersonCard";

export default function MediaCardContainer(props) {
    if (props.type === "person" || props.media_type === "person") {
        return <PersonCard {...props} type="person" />;
    } else if (props.type === "tv" || props.media_type === "tv") {
        return <TvCard {...props} type="tv" />;
    } else {
        return <MovieCard {...props} type="movie" />;
    }
}
