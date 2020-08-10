import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link as routerLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BackToTop from "../../BackToTop";

const useStyles = makeStyles((theme) => ({
    link: {
        padding: theme.spacing(2),
        fontWeight: 900,
        "&:hover": {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9em",
            padding: theme.spacing(1),
        },
    },
    arrow: {
        color: theme.palette.text.primary,
        "&:hover": {
            color: theme.palette.secondary.main,
        },
    },
}));

export default function Navlink({ url, name, subList }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Link
                component={routerLink}
                to={url}
                href={url}
                id={url}
                color={"textPrimary"}
                underline="none"
                variant="h6"
                className={classes.link}
                key={url}
                onClick={(e) => {
                    if (subList.length > 0) e.preventDefault();
                    else if (name !== "Home") BackToTop();
                    handleClick(e);
                }}
            >
                {name}
                {subList.length > 0 && <ExpandMoreIcon size="inherit" />}
            </Link>
            {subList.length > 0 && (
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {subList.map((item) => (
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                BackToTop();
                            }}
                            component={routerLink}
                            to={item.url}
                            key={item.url}
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </>
    );
}
