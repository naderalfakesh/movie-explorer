import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Navlinks from "./Navlinks";
import Login from "./Login";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
    navigation: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    hideLinks: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.text.primary,
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    AppBar: {
        paddingTop: theme.spacing(5),
    },
}));

export default function Navbar({ linksList, handleDrawerToggle }) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar
                color="transparent"
                elevation={0}
                className={classes.AppBar}
                position="static"
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <div className={classes.navigation}>
                            <Fab
                                color="secondary"
                                size="small"
                                aria-label="open drawer"
                                className={classes.menuButton}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </Fab>

                            <div className={classes.hideLinks}>
                                <Navlinks linksList={linksList} />
                            </div>
                            <Login />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}
