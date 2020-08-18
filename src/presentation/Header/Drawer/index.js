import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import DrawerLink from "./DrawerLink";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    backToTop: {
        position: "fixed",
        zIndex: 100,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    devider: {
        backgroundColor: theme.palette.text.secondary,
    },
}));

export default function PersistentDrawerLeft({
    linksList,
    handleDrawerToggle,
    status,
}) {
    const classes = useStyles();

    function ScrollTop(props) {
        const { children, window } = props;
        const classes = useStyles();
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const handleClick = (event) => {
            props.openDrawer();
            const anchor = (
                event.target.ownerDocument || document
            ).querySelector("#back-to-top-anchor");

            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        };
        return (
            <Zoom in={trigger}>
                <div
                    onClick={handleClick}
                    role="presentation"
                    className={classes.backToTop}
                >
                    {children}
                </div>
            </Zoom>
        );
    }

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={status}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Fab
                        color="secondary"
                        size="small"
                        aria-label="close drawer"
                        onClick={handleDrawerToggle}
                    >
                        <ChevronLeftIcon />
                    </Fab>
                </div>
                <Divider className={classes.devider} />
                <List>
                    {linksList.map((link, index) => (
                        <DrawerLink
                            link={link}
                            key={index}
                            handleDrawerToggle={handleDrawerToggle}
                        />
                    ))}
                </List>
            </Drawer>
            <ScrollTop openDrawer={handleDrawerToggle}>
                <Fab color="secondary" size="small" aria-label="open drawer">
                    <MenuIcon />
                </Fab>
            </ScrollTop>
        </div>
    );
}
