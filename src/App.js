import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./container/Header";
import Footer from "./container/Footer";
import HomePage from "./container/HomePage";
import Movies from "./container/MoviesPage";
import Series from "./views/Series";
import MovieDetails from "./container/MovieDetailsPage";
import SerieDetails from "./views/Series/SerieDetails";
import Colors from "./views/theme/Colors";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/movies/rated">
                        <Movies variant="top_rated" />
                    </Route>
                    <Route exact path="/movies/recent">
                        <Movies variant="now_playing" />
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>

                    <Route exact path="/movie/:id">
                        <MovieDetails />
                    </Route>
                    <Route exact path="/series/rated">
                        <Series variant="top_rated" />
                    </Route>
                    <Route exact path="/series/on_air">
                        <Series variant="on_the_air" />
                    </Route>
                    <Route path="/series">
                        <Series />
                    </Route>
                    <Route exact path="/serie/:id">
                        <SerieDetails />
                    </Route>
                    <Route exact path="/colors">
                        <Colors />
                    </Route>
                </Switch>
                <Footer />
            </>
        );
    }
}

export default App;
