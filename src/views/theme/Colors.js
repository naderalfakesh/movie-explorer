import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )",
        gap: "5px",
        paddingTop: "10px",
        paddingBottom: "10px",
        "& > div": {
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textTransform: "uppercase",
            border: "1px solid black",
            borderRadius: "5px",
        },
    },
}));

export default function Colors() {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.container}>
                {/* primary */}
                <Box bgcolor="primary.main">primarymain</Box>
                <Box bgcolor="primary.light">primarylight</Box>
                <Box bgcolor="primary.dark">primarydark</Box>
                {/* secondary */}
                <Box bgcolor="secondary.main">secondarymain</Box>
                <Box bgcolor="secondary.light">secondarylight</Box>
                <Box bgcolor="secondary.dark">secondarydark</Box>
                {/* error */}
                <Box bgcolor="error.main">errormain</Box>
                <Box bgcolor="error.light">errorlight</Box>
                <Box bgcolor="error.dark">errordark</Box>
                {/* warning */}
                <Box bgcolor="warning.main">warningmain</Box>
                <Box bgcolor="warning.light">warninglight</Box>
                <Box bgcolor="warning.dark">warningdark</Box>
                {/* info */}
                <Box bgcolor="info.main">infomain</Box>
                <Box bgcolor="info.light">infolight</Box>
                <Box bgcolor="info.dark">infodark</Box>
                {/* success */}
                <Box bgcolor="success.main">successmain</Box>
                <Box bgcolor="success.light">successlight</Box>
                <Box bgcolor="success.dark">successdark</Box>
                {/* success */}
                <Box bgcolor="text.primary">textprimary</Box>
                <Box bgcolor="text.secondary">textsecondary</Box>
                <Box bgcolor="text.disabled">textdisabled</Box>
                <Box bgcolor="text.hint">texthint</Box>
                {/* Greys */}
                <Box bgcolor="grey.50">grey50</Box>
                <Box bgcolor="grey.100">grey100</Box>
                <Box bgcolor="grey.200">grey200</Box>
                <Box bgcolor="grey.300">grey300</Box>
                <Box bgcolor="grey.400">grey400</Box>
                <Box bgcolor="grey.500">grey500</Box>
                <Box bgcolor="grey.600">grey600</Box>
                <Box bgcolor="grey.700">grey700</Box>
                <Box bgcolor="grey.800">grey800</Box>
                <Box bgcolor="grey.900">grey900</Box>
                <Box bgcolor="grey.A100">greyA100</Box>
                <Box bgcolor="grey.A200">greyA200</Box>
                <Box bgcolor="grey.A400">greyA400</Box>
                <Box bgcolor="grey.A700">greyA700</Box>
            </Container>
            <Typography variant="h1">
                h1: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="h2">
                h2: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="h3">
                h3: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="h4">
                h4: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="h5">
                h5: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="h6">
                h6: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="subtitle1">
                subtitle1: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="subtitle2">
                subtitle2: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="body1">
                body1: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="body2">
                body2: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="BUTTON">
                BUTTON: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="caption">
                caption: lorem ipsum my name is nader I like Rambo movies
            </Typography>
            <Typography variant="OVERLINE">
                OVERLINE: lorem ipsum my name is nader I like Rambo movies
            </Typography>
        </>
    );
}
