import React from "react";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}));

export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <Link href="/" color={"textPrimary"} variant="body2">
                LOG IN
            </Link>
            <Button variant="contained" color="secondary">
                SIGN UP
            </Button>
        </div>
    );
}
