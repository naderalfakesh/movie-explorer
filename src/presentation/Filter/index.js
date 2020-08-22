import React, { useEffect } from "react";
import { Typography, Box, Grid, Divider, Button } from "@material-ui/core";
import SliderInput from "./SliderInput";
import SelectInput from "./SelectInput";
import GenresList from "../../Components/API/genres";

export default function Filter({ handleFilter, filterReset }) {
    const [genre, setGenre] = React.useState("");
    const [rating, setRating] = React.useState([1, 10]);
    const [year, setYear] = React.useState(2020);

    useEffect(() => {
        if (filterReset) {
            setGenre("");
            setRating([1, 10]);
            setYear(2020);
        }
    }, [filterReset]);

    return (
        <Box mb={3}>
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
                            value={genre}
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
                            value={rating}
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
                            value={year}
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
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
