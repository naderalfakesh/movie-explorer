import React, { useState, useEffect } from "react";
import { Typography, Link, Divider } from "@material-ui/core";
import ActorAvatar from "../../ActorAvatar";
import { getTrendingPersons } from "../../../Components/API";
import { imageBaseURL } from "../../../Components/API/constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    hover: {
        "&:hover": {
            color: "#dd003f",
            transition: "0.5s",
        },
    },
}));
export default function HomeSideBar() {
    const classes = useStyles();
    const [actors, setActors] = useState([]);
    useEffect(() => {
        getTrendingPersons().then((data) =>
            setActors(data.results.slice(0, 4))
        );
    }, []);
    return (
        <div>
            <Typography paragraph>SPOTLIGHT CELEBRITIES</Typography>
            <Divider />
            {actors.map((actor) => (
                <ActorAvatar
                    key={actor.name}
                    name={actor.name}
                    profession={actor.known_for_department}
                    img={`${imageBaseURL(92)}${actor.profile_path}`}
                    link={"/celebrity/" + actor.id}
                    knownFor={actor.known_for[0].title}
                />
            ))}

            <Link
                href="/celebrities/"
                color="textPrimary"
                className={classes.hover}
            >
                SEE ALL CELEBRITIES >
            </Link>
        </div>
    );
}
