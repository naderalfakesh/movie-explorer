import React from "react";
import { useParams } from "react-router-dom";

export default function SerieDetails() {
    const { id } = useParams();
    return <div>details {id}</div>;
}
