import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Sidebar from "../Sidebar"
import MovieList from "../MovieList"

export default function HomePage() {
    return (
        <Box mt={5} >
            <Grid container  >
                <Grid item md={2} sm={3} xs={4} >
                    <Sidebar />
                </Grid>
                <Grid item md={10} sm={9} xs={8} >
                    <MovieList />
                </Grid>
            </Grid>
        </Box>
    )
}

