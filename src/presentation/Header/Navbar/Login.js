import React from "react";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    hover: {
        transition: "all 0.3s ease-out",
        fontWeight: 900,
        marginRight: theme.spacing(2),
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.success.main,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9em",
            marginRight: theme.spacing(1),
        },
    },
    btn: {
        fontWeight: 900,
        fontSize: "1rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9em",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <Link
                className={classes.hover}
                href="/"
                color={"textPrimary"}
                variant="h6"
            >
                LOG IN
            </Link>
            <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                size="small"
            >
                SIGN UP
            </Button>
        </div>
    );
}
