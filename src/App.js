import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Header from "./container/Header";
import Footer from "./container/Footer";
import HomePage from "./container/HomePage";
// import Movies from "./container/MoviesPage";
// import MovieDetails from "./container/MovieDetailsPage";
// import Series from "./container/SeriesPage";
// import SerieDetails from "./container/SerieDetailsPage";
// import Cast from "./container/CastPage";
// import CastDetails from "./container/CastDetailsPage";
import Search from "./container/SearchPage";
import Colors from "./views/theme/Colors";
import ListingPage from "./container/ListingPage";
import DetailsPage from "./container/DetailsPage";

class App extends React.Component {
    render() {
        // const { id,type } = useParams();
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/details/:type/:id">
                        <DetailsPage />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/search/:type/:query">
                        <Search />
                    </Route>
                    <Route exact path="/movies/rated">
                        <ListingPage type="movie" variant="top_rated" />
                    </Route>
                    <Route exact path="/movies/recent">
                        <ListingPage type="movie" variant="now_playing" />
                    </Route>
                    <Route path="/movies">
                        <ListingPage type="movie" />
                    </Route>

                    {/* <Route exact path="/movie/:id">
                        <MovieDetails type="movie" />
                    </Route> */}
                    <Route exact path="/series/rated">
                        <ListingPage type="tv" variant="top_rated" />
                    </Route>
                    <Route exact path="/series/on_air">
                        <ListingPage type="tv" variant="on_the_air" />
                    </Route>
                    <Route path="/series">
                        <ListingPage type="tv" />
                    </Route>
                    {/* <Route exact path="/tv/:id">
                        <SerieDetails type="tv" />
                    </Route> */}

                    <Route exact path="/cast">
                        <ListingPage type="person" />
                    </Route>
                    {/* <Route exact path="/person/:id">
                        <CastDetails type="person" />
                    </Route> */}
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
