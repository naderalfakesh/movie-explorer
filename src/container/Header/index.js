import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../presentation/Header";
// import {search} from "../../Components/API"

export default function HeaderContainer() {
    let history = useHistory();
    const handleSearch = (type,query)=>{
        history.push(`/search/${type}/${query}`);
        // search(type,query,1).then(console.log)
    }
    return <Header handleSearch={handleSearch} />;
}
