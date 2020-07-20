import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link as routerLink } from "react-router-dom";

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

export default function SearchBar({ handleSearch }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        type: "multi",
        query: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setState({ type: "multi", query: "" });
        handleSearch(state.type, state.query);
    };

    return (
        <Container maxWidth="lg">
            <Paper
                component="form"
                onSubmit={handleClick}
                className={classes.root}
            >
                <FormControl variant="filled" className={classes.formControl}>
                    <Select
                        native
                        displayEmpty
                        value={state.type}
                        onChange={handleChange}
                        inputProps={{
                            name: "type",
                            id: "type",
                        }}
                    >
                        <option aria-label="None" value={"multi"}>
                            All
                        </option>
                        <option value={"movie"}>Movie</option>
                        <option value={"tv"}>TV show</option>
                        <option value={"person"}>Cast member</option>
                    </Select>
                </FormControl>
                <InputBase
                    className={classes.input}
                    placeholder="Search Movie,Tv show , cast member ....."
                    inputProps={{
                        "aria-label": "search",
                        name: "query",
                        id: "query",
                    }}
                    onChange={handleChange}
                    value={state.query}
                />
                <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={handleClick}
                    component={routerLink}
                    to={"/search"}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>
    );
}
