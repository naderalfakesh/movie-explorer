import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        border: "4px solid #020d18",
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "white",
    },
    iconButton: {
        padding: 10,
        color: "white",
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: "",
        name: "hai",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <Container maxWidth="lg">
            <Paper component="form" className={classes.root}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-native-simple">
                        Age
                    </InputLabel>
                    <Select
                        native
                        displayEmpty
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: "age",
                            id: "filled-age-native-simple",
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <InputBase
                    className={classes.input}
                    placeholder="Search Google Maps"
                    inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>
    );
}
