import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noShrink: {
    // Prevent slides from shrinking to one page width
    flex: "0 0 100%",
  },
}));

export default function Slide({ children, slidesTotalNum, slidesNumToShow }) {
  const classes = useStyles();
  const GRID_TOTAL_WIDTH = 12;

  /*
   * Slides rendering:
   * 1. Slides are grouped in grid containers so they will be rendered on screen independent
   *    of other slide group.
   * 2. Every group contains slides matching the number of slides to show passed from parent.
   * 3. Every slide is a grid item contains the child passed by developer (img in this case).
   *
   * Note: While groups and slides are nested and it is not possible to write for loops in JSX
   *       I produce slides with inner for loop and push them in their group and the outer for
   *       loop produce slides groups
   */
  const slideGroups = [];
  for (
    let groupIndex = 0;
    groupIndex < slidesTotalNum / slidesNumToShow;
    groupIndex++
  ) {
    let slides = [];
    // Inner loop produce slides
    for (let slideIndex = 0; slideIndex < slidesNumToShow; slideIndex++) {
      slides.push(
        children[groupIndex * slidesNumToShow + slideIndex] ? (
          <Grid item key={slideIndex}>
            {children[groupIndex * slidesNumToShow + slideIndex]}
          </Grid>
        ) : (
          <Grid item key={slideIndex} xs={GRID_TOTAL_WIDTH / slidesNumToShow}>
            {/*
             * Fix: when the last page contains missing slides the xs prop
             * makes sure that remaining slide gets its right place.
             */}
            {children[groupIndex * slidesNumToShow + slideIndex]}
          </Grid>
        )
      );
    }
    // Push produced slides in their perspective group.
    slideGroups.push(
      <Grid
        container
        item
        className={classes.noShrink}
        xs={GRID_TOTAL_WIDTH}
        spacing={0}
        key={groupIndex}
        wrap="nowrap"
        alignItems="center"
        justify="space-around"
      >
        {slides}
      </Grid>
    );
  }

  return <>{slideGroups}</>;
}
