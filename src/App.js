import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/index.js";
import Home from "./views/Home";
import Movies from "./views/Movies";
import Series from "./views/Series";
import MovieDetails from "./views/MovieDetails";
import SerieDetails from "./views/SerieDetails";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/movies">
                        <Movies />
                    </Route>
                    <Route exact path="/movie/:id">
                        <MovieDetails />
                    </Route>
                    <Route exact path="/series">
                        <Series />
                    </Route>
                    <Route exact path="/serie/:id">
                        <SerieDetails />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default App;
