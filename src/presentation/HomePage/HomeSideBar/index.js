import React from "react";
import { Typography, Link, Divider, Grid, Box } from "@material-ui/core";
import ActorAvatar from "../../ActorAvatar";
import { imageBaseURL } from "../../../Components/API/constants";
import { makeStyles } from "@material-ui/core/styles";
import { Link as routerLink } from "react-router-dom";
import BackToTop from "../../BackToTop";

const useStyles = makeStyles((theme) => ({
    hover: {
        "&:hover": {
            color: "#dd003f",
            transition: "0.5s",
        },
    },
}));
export default function HomeSideBar({ persons }) {
    const classes = useStyles();
    return (
        <div>
            <Typography paragraph>SPOTLIGHT CELEBRITIES</Typography>
            <Divider />
            <Box my={3}>
                <Grid container spacing={3}>
                    {persons.map((actor) => (
                        <Grid item key={actor.name} lg={12}>
                            <ActorAvatar
                                name={actor.name}
                                profession={actor.known_for_department}
                                img={`${imageBaseURL(92)}${actor.profile_path}`}
                                link={"/person/" + actor.id}
                                knownFor={actor.known_for[0].title}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Link
                component={routerLink}
                to="/cast/"
                href="/cast/"
                color="textPrimary"
                className={classes.hover}
                onClick={() => BackToTop()}
            >
                SEE ALL CELEBRITIES &gt;
            </Link>
        </div>
    );
}
