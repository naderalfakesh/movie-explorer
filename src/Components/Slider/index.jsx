import React, { useState, useEffect } from "react";
import SliderWrapper from "./SliderWrapper";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Slider({
  children,
  // Number of slide to show on screen with default value of  1
  slidesToShow = 1,
  // Number of slides to scroll with default value of  1
  slidesToScroll = 1,
  // If true then slides rotate automatically
  autoplay,
  // The interval between every movement in [mS] with default value of  2000ms
  timeout = 2000,
  // Breakpoints for responsive ex:{ md:{ slidesToShow:2 } }
  breakpoints,
}) {
  const theme = useTheme();
  const PERCENTAGE_CONVERT_MULTIPLIER = 100;
  /*
   * Calculation for responsiveness:
   * 1. Set number of slide to show on screen and number of slides to scroll at a time.
   * 2. Check the screen for matching breakpoint using "useMediaQuery" hook.
   * 3. Check if breakpoints prop is set.
   * 4. If breaking point is set change slidesNumToShow  and slidesNumToScroll according
   *    to the prop passed by parent component , if number of slides is not set then keep the default setting.
   */

  let slidesNumToShow = slidesToShow;
  let slidesNumToScroll = slidesToScroll;

  // Check the screen for matching breakpoint using "useMediaQuery" hook.
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  if (breakpoints) {
    // If breaking point is set change slidesNumToShow  and slidesNumToScroll according to the prop passed by parent component.
    if (xs && breakpoints.hasOwnProperty("xs")) {
      slidesNumToShow = breakpoints.xs.hasOwnProperty("slidesToShow")
        ? breakpoints.xs.slidesToShow
        : slidesToShow;
      slidesNumToScroll = breakpoints.xs.hasOwnProperty("slidesToScroll")
        ? breakpoints.xs.slidesToScroll
        : slidesToScroll;
    } else if (sm && breakpoints.hasOwnProperty("sm")) {
      slidesNumToShow = breakpoints.sm.hasOwnProperty("slidesToShow")
        ? breakpoints.sm.slidesToShow
        : slidesToShow;
      slidesNumToScroll = breakpoints.sm.hasOwnProperty("slidesToScroll")
        ? breakpoints.sm.slidesToScroll
        : slidesToScroll;
    } else if (md && breakpoints.hasOwnProperty("md")) {
      slidesNumToShow = breakpoints.md.hasOwnProperty("slidesToShow")
        ? breakpoints.md.slidesToShow
        : slidesToShow;
      slidesNumToScroll = breakpoints.md.hasOwnProperty("slidesToScroll")
        ? breakpoints.md.slidesToScroll
        : slidesToScroll;
    } else if (lg && breakpoints.hasOwnProperty("lg")) {
      slidesNumToShow = breakpoints.lg.hasOwnProperty("slidesToShow")
        ? breakpoints.lg.slidesToShow
        : slidesToShow;
      slidesNumToScroll = breakpoints.lg.hasOwnProperty("slidesToScroll")
        ? breakpoints.lg.slidesToScroll
        : slidesToScroll;
    }
  }
  /*
   * Calculation for rotating slides:
   * 1. Set a hook for moving slides dynamically (step).
   * 2. Get total number of slides (slidesTotalNum).
   * 3. Calculate number of remaining slides to scroll.
   * 4. Calculate the new position to move to according to the current step.
   * 5. New position is a hundred percent of screen , it can be
   *    (0% , 25% , 100% , 150% ,400% and so on )
   */
  const [step, setStep] = useState(0);
  const slidesTotalNum = children.length;
  const remainingSlides = slidesTotalNum - step * slidesNumToScroll;
  // Check if remaining slides can fill screen or not
  const newPosition =
    remainingSlides >= slidesNumToShow
      ? (PERCENTAGE_CONVERT_MULTIPLIER * step * slidesNumToScroll) /
        slidesNumToShow
      : /*
         * If false make sure that new position does not exceed the last slide,
         * so the last slide will end on the end of screen what ever the number of slides.
         */
        (PERCENTAGE_CONVERT_MULTIPLIER * step * slidesNumToScroll) /
          slidesNumToShow -
        (PERCENTAGE_CONVERT_MULTIPLIER *
          (slidesNumToScroll - remainingSlides)) /
          slidesNumToShow;

  // Calculate stepCount rounding up , to make sure that there is no fraction or missing steps.
  const stepCount = Math.ceil(
    (slidesTotalNum - slidesNumToShow) / slidesNumToScroll + 1
  );
  // Setting interval when autoplay prop is set , and slides number is enough to rotate
  useEffect(() => {
    if (autoplay && slidesTotalNum > slidesNumToShow) {
      const Interval = setInterval(rotate, timeout);
      return () => {
        clearInterval(Interval);
      };
    }
  });

  /*
   * The actual rotating func if step is not set then it will go to the next slide
   * otherwise it will go to the passed step number
   */
  const rotate = (step = -1) => {
    if (step >= 0) {
      setStep(step);
    } else {
      setStep((prev) => (prev === stepCount - 1 ? 0 : prev + 1));
    }
  };
  return (
    <SliderWrapper
      newPosition={newPosition}
      slidesTotalNum={slidesTotalNum}
      slidesNumToShow={slidesNumToShow}
      stepCount={stepCount}
      activeStep={step}
      handleClick={rotate}
    >
      {children}
    </SliderWrapper>
  );
}
