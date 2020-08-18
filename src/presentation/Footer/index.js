import React from "react";
import {
    Typography,
    Link,
    Box,
    Grid,
    Container,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BG from "../../assets/footerBG.jpg";
import logo from "../../assets/logo.png";
import FooterLink from "./FooterLink";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        minHeight: "50vh",
        background: `url(${BG})`,
        backgroundSize: "contain",
        color: "white",
    },
    footerCenter: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
        },
    },
    gridCenter: {
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
    },
    input: {
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(1.5),
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    logo: {
        marginBottom: theme.spacing(5),
        height: "50px",
        objectFit: "cover",
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box py={5} className={classes.wrapper}>
            <Container maxWidth="lg">
                <Grid
                    container
                    justify="space-between"
                    alignContent="center"
                    spacing={5}
                    className={classes.footerCenter}
                >
                    <Grid item className={classes.gridCenter}>
                        <img
                            className={classes.logo}
                            src={logo}
                            alt="logo"
                            width="100"
                        />
                        <Typography>
                            5th Avenue st, manhattan <br /> New York, NY 10001
                        </Typography>
                        <Typography>Call us: (+01) 202 342 6789</Typography>
                    </Grid>
                    <Grid item className={classes.gridCenter}>
                        <Typography variant="h5" className={classes.title}>
                            Resources
                        </Typography>
                        {links.resources.map(({ link, label }) => (
                            <FooterLink link={link} label={label} key={label} />
                        ))}
                    </Grid>
                    <Grid item className={classes.gridCenter}>
                        <Typography variant="h5" className={classes.title}>
                            Legal
                        </Typography>
                        {links.legal.map(({ link, label }) => (
                            <FooterLink link={link} label={label} key={label} />
                        ))}
                    </Grid>
                    <Grid item className={classes.gridCenter}>
                        <Typography variant="h5" className={classes.title}>
                            Account
                        </Typography>
                        {links.account.map(({ link, label }) => (
                            <FooterLink link={link} label={label} key={label} />
                        ))}
                    </Grid>
                    <Grid item className={classes.gridCenter}>
                        <Typography variant="h5" className={classes.title}>
                            Newsletter
                        </Typography>
                        <Typography>
                            Subscribe to our newsletter system now <br /> to get
                            latest news from us.
                        </Typography>
                        <form noValidate autoComplete="off">
                            <TextField
                                id="outlined-basic"
                                label="Enter your Email..."
                                variant="outlined"
                                color="secondary"
                                className={classes.input}
                            />
                        </form>
                        <Typography>
                            <Link href="#" color="textPrimary">
                                SUBSCRIBE NOW >
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

const links = {
    resources: [
        {
            label: "About",
            link: "#",
        },
        {
            label: "Contact Us",
            link: "#",
        },
        {
            label: "Forums",
            link: "#",
        },
        {
            label: "Blog",
            link: "#",
        },
        {
            label: "Help Center",
            link: "#",
        },
    ],
    legal: [
        {
            label: "Terms of Use",
            link: "#",
        },
        {
            label: "Privacy Policy",
            link: "#",
        },
        {
            label: "Security",
            link: "#",
        },
    ],
    account: [
        {
            label: "My Account",
            link: "#",
        },
        {
            label: "Watchlist",
            link: "#",
        },
        {
            label: "Collections",
            link: "#",
        },
        {
            label: "User Guide",
            link: "#",
        },
    ],
};
