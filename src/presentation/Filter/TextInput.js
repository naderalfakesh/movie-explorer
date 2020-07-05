import React from "react";
import { TextField, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%",
        backgroundColor: "white",
        color: "black",
    },
}));

export default function TextInput({ label, userInput }) {
    const classes = useStyles();
    const [value, setValue] = React.useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
        userInput(event.target.value);
    };
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <TextField
                label={label}
                id="outlined-size-small"
                size="small"
                variant="outlined"
                value={value}
                onChange={handleChange}
            />
        </FormControl>
    );
}
