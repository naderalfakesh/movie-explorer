import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInRef = React.createRef();
const SignUpRef = React.createRef();

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
    const [open, setOpen] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        setSignIn(true);
        setOpen(true);
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        setSignIn(false);
        setOpen(true);
    };
    const handleClose = (e) => {
        setOpen(false);
        setSignIn(false);
    };
    return (
        <div>
            <Link
                className={classes.hover}
                href="/"
                color={"textPrimary"}
                variant="h6"
                onClick={handleSignIn}
            >
                LOG IN
            </Link>
            <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleSignUp}
            >
                SIGN UP
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Signup"
                aria-describedby="Signup"
            >
                {
                    //Modals needs forward referance in order to be used with custom components
                    signIn ? (
                        <SignIn ref={SignInRef} />
                    ) : (
                        <SignUp ref={SignUpRef} />
                    )
                }
            </Modal>
        </div>
    );
}
