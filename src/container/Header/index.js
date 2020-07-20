import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../presentation/Header";

export default function HeaderContainer() {
    let history = useHistory();
    const handleSearch = (type,query)=>{
        history.push(`/search/${type}/${query}`);
    }
    return <Header handleSearch={handleSearch} />;
}
