import React from "react";
// import movies from './data';
import MoviesList from "./Components/MovieList/index.js";
import Header from "./Components/Header/index.js";
import Movie from "./Components/Movie/index.js";
import { Route } from "react-router-dom";
import Home from "./views/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            query: "",
        };
    }
    constructURL = () => {
        let URL = "";
        const BASE_URL = "https://api.themoviedb.org/3";
        const API_KEY = "542003918769df50083a13c415bbc602";
        URL = BASE_URL;
        if (this.state.query === "") {
            URL += `/movie/popular?api_key=${API_KEY}`;
        } else {
            URL += `/search/movie?api_key=${API_KEY}&query=${this.state.query}&include_adult=false`;
        }
        console.log(URL);
        return URL;
    };

    componentDidMount = () => {
        fetch(this.constructURL())
            .then((resp) => resp.json())
            .then((json) => {
                this.setState(
                    {
                        movies: json.results,
                    },
                    () => console.log(this.state)
                );
            });
    };

    handleChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };
    handlesubmit = (e) => {
        if (e.key === "Enter") {
            fetch(this.constructURL())
                .then((resp) => resp.json())
                .then((json) => {
                    this.setState(
                        {
                            movies: json.results,
                        },
                        () => console.log(this.state)
                    );
                });
        }
    };

    render() {
        return (
            <div>
                <Header />
                <Home />
                {/* <Route
                    exact
                    path="/"
                    render={() => <MoviesList movies={this.state.movies} />}
                />
                <Route
                    path="/movies/:id"
                    render={(routerProps) => (
                        <Movie {...routerProps} movies={this.state.movies} />
                    )}
                /> */}
            </div>
        );
    }
}

export default App;
