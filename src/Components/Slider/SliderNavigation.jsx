import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Icon: {
        fontSize: ".6em",
    },
    Button: {
        margin: 0,
        padding: 0,
    },
}));

export default function SliderNavigation({
    stepCount,
    activeStep,
    handleClick,
}) {
    const classes = useStyles();
    const steps = Array.from(Array(stepCount).keys());

    return (
        <Box mt={5}>
            <Grid container justify="center" alignItems="center" spacing={1}>
                {steps.map((step) => (
                    <Grid item key={step}>
                        <IconButton
                            onClick={() => handleClick(step)}
                            className={classes.Button}
                        >
                            <FiberManualRecordIcon
                                className={classes.Icon}
                                color={
                                    step === activeStep
                                        ? "secondary"
                                        : "primary"
                                }
                            >
                                {step}
                            </FiberManualRecordIcon>
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
