import React from "react";
import { Slider, Typography } from "@material-ui/core";

export default function SliderInput({
    label,
    defaultValue,
    min,
    max,
    step,
    userInput,
    value,
}) {
    // const [value, setValue] = React.useState(defaultValue);
    const handleChange = (event, newValue) => {
        // setValue(newValue);
        userInput(newValue);
    };
    return (
        <>
            <Typography id="slider" gutterBottom>
                {label}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                defaultValue={defaultValue}
                aria-labelledby="slider"
                step={step}
                marks
                min={min}
                max={max}
                valueLabelDisplay="auto"
            />
        </>
    );
}
