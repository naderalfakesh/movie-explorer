import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

const MAX_NUM_OF_STEPS_TO_SHOW = 5;
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
    const page = Math.trunc(activeStep / MAX_NUM_OF_STEPS_TO_SHOW);
    const pagedSteps = steps.slice(
        page * MAX_NUM_OF_STEPS_TO_SHOW,
        (page + 1) * MAX_NUM_OF_STEPS_TO_SHOW
    );
    console.log(pagedSteps);
    return (
        <Box mt={5}>
            <Grid container justify="center" alignItems="center" spacing={1}>
                {activeStep > 0 && (
                    <IconButton
                        onClick={() => handleClick(activeStep - 1)}
                        className={classes.Button}
                    >
                        <ArrowBackIosIcon className={classes.Icon} />
                    </IconButton>
                )}
                {pagedSteps.map((step) => (
                    <Grid item key={step}>
                        <IconButton
                            onClick={() => handleClick(step)}
                            className={classes.Button}
                            color={
                                step === activeStep ? "secondary" : "primary"
                            }
                        >
                            <FiberManualRecordIcon className={classes.Icon} />
                        </IconButton>
                    </Grid>
                ))}
                {activeStep < stepCount - 1 && (
                    <IconButton
                        onClick={() => handleClick(activeStep + 1)}
                        className={classes.Button}
                    >
                        <ArrowForwardIosIcon className={classes.Icon} />
                    </IconButton>
                )}
            </Grid>
        </Box>
    );
}
