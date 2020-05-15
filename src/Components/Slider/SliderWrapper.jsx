import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SliderNavigation from "./SliderNavigation";
import Slide from "./Slide";

export default function SliderWrapper({
  children,
  newPosition,
  slidesTotalNum,
  slidesNumToShow,
  stepCount,
  activeStep,
  // handleClick handles the navigation between slide groups.
  handleClick,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      padding: 0,
    },
    translate: {
      // newPosition is calculated and passed down from parent
      transform: `translateX(-${newPosition}%)`,
      transition: "all 1s cubic-bezier(.69,.7,0,1.11)",
    },
  }));
  const classes = useStyles();
  /*
   * 1. There is a big container with hidden overflow.
   * 2. A Grid container that will hold all slides, so it will overflow out of screen
   *    but not showing, and by changing the position of it the slides will rotate or move if you will.
   * 3. inside of it there is Slide component which has it is own description.
   * 4. Also there is the slider navigation component as dots stepper.
   */
  return (
    <Container className={classes.root}>
      <Grid
        container
        className={classes.translate}
        spacing={0}
        wrap="nowrap"
        alignItems="center"
      >
        <Slide
          slidesTotalNum={slidesTotalNum}
          slidesNumToShow={slidesNumToShow}
        >
          {children}
        </Slide>
      </Grid>
      <SliderNavigation
        stepCount={stepCount}
        activeStep={activeStep}
        handleClick={handleClick}
      />
    </Container>
  );
}
