import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Navlinks from "./Navlinks";
import Login from "./Login";
import ElevationScroll from "./ElevationScroll";

const useStyles = makeStyles((theme) => ({
    navigation: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.text.primary,
    },
    AppBar: {
        paddingTop: theme.spacing(5),
    },
}));

export default function ElevateAppBar(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar
                    color="transparent"
                    elevation={0}
                    className={classes.AppBar}
                    position="static"
                >
                    <Container maxWidth="lg">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <div className={classes.navigation}>
                                <Navlinks />
                                <Login />
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}
