import React from "react";
// import Stars from "./Stars";
import { Link } from "@material-ui/core";
import { imageBaseURL } from "../../Components/API/constants";
import css from "./style.js";

export default function DetailsPage({ data }) {
    const classes = css({ background: "test" });
    const poster = data ? imageBaseURL(200) + data.profile_path : "";
    return (
        <div className={classes.thumbnail}>
            <Link href={data.homepage}>
                <img src={poster} alt="Poster" width="20%" />
            </Link>
        </div>
    );
}
