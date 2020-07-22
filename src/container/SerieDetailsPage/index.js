import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSerie } from "../../Components/API";
import DetailsPage from "../../presentation/DetailsPage";

export default function SeriesDetailsContainer() {
    const { id } = useParams();
    const [tv, seTtv] = useState();
    useEffect(() => {
        getSerie(id).then(seTtv).catch(console.log);
    }, [id]);

    return <DetailsPage data={tv} type="tv" />;
}
