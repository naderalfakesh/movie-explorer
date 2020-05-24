import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Home from "./views/Home";
import Movies from "./views/Movies";
import Series from "./views/Series";
import MovieDetails from "./views/Movies/MovieDetails";
import SerieDetails from "./views/Series/SerieDetails";
import Colors from "./views/theme/Colors";

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
