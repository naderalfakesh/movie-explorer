import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../Components/API";
import DetailsPage from "../../presentation/DetailsPage";

export default function DetailsPageContainer() {
    const { id, type } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        getDetails(id, type).then(setItem).catch(console.log);
    }, [id, type]);

    return <DetailsPage data={item} type={type} />;
}
