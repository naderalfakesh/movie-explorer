import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../Navbar";
import SearchBar from "../SearchBar";
import headerBG from "../../assets/headerBG.jpg";
import HeaderSlider from "../../views/HeaderSlider";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        backgroundColor: "rgba(0,0,0,.2)",
        position: "relative",
        "&::before": {
            content: '""',
            background: `url(${headerBG})`,
            backgroundSize: "cover",
            opacity: 1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            zIndex: -1,
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <SearchBar />
            <HeaderSlider />
        </div>
    );
}
