import React from "react";
import { Typography, Box, Grid, Divider, Button } from "@material-ui/core";
import SliderInput from "./SliderInput";
import SelectInput from "./SelectInput";
import GenresList from "../API/genres";

export default function Filter({ handleFilter }) {
    const [genre, setGenre] = React.useState("");
    const [rating, setRating] = React.useState("");
    const [year, setYear] = React.useState("");

    return (
        <Box>
            <Typography color="primary" component="h2" variant="h6">
                SEARCH FOR MOVIE
            </Typography>
            <Divider color="primary" />
            <Box bgcolor="grey.200" p={3} mt={4}>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <SelectInput
                            label="Genre"
                            values={GenresList}
                            userInput={setGenre}
                        />
                    </Grid>

                    <Grid item>
                        <SliderInput
                            label="Rating"
                            defaultValue={[1, 10]}
                            step={1}
                            min={1}
                            max={10}
                            userInput={setRating}
                        />
                    </Grid>
                    <Grid item>
                        <SliderInput
                            label="Production year"
                            defaultValue={2020}
                            step={1}
                            min={2000}
                            max={2020}
                            userInput={setYear}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilter(genre, rating, year);
                            }}
                        >
                            Secondary
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
