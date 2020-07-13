import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./Navbar";
import SearchBar from "./SearchBar";
import Social from "./Social";
import headerBG from "../../assets/headerBG.jpg";
import HeaderSlider from "./HeaderSlider";
import { Route , useLocation} from "react-router-dom";


export default function Header({ handleSearch }) {

    let location = useLocation();
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: location.pathname === "/" ? "100vh" : "unset",
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

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <SearchBar handleSearch={handleSearch} />
            <Social />
            <Route exact path="/">
                <HeaderSlider />
            </Route>
        </div>
    );
}
