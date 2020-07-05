import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%",
        backgroundColor: "white",
        color: "black",
    },
}));
export default function SelectInput({ label, values, userInput }) {
    const classes = useStyles();
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        userInput(event.target.value);
    };
    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
            size="small"
        >
            <InputLabel id="label">{label}</InputLabel>
            <Select
                labelId="label"
                id={label}
                value={value}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {values.map((val) => (
                    <MenuItem value={val.id} key={val.id}>
                        {val.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
