import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "../../Components/API";
import DetailsPage from "../../presentation/DetailsPage";

export default function SeriesDetailsPageContainer() {
    const { id } = useParams();
    const [person, setPerson] = useState();
    useEffect(() => {
        getPerson(id).then(setPerson).catch(console.log);
    }, [id]);
    return <DetailsPage data={person} type="person" />;
}
