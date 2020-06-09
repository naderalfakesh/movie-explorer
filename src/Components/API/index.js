import { BASE_URL, API_KEY } from "./constants";
const fetchAPI = (URL) => {
    return fetch(URL).then((resp) => resp.json());
};
const getMovies = (variant = "popular", page = 1) => {
    let URL = `${BASE_URL}/movie/${variant}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};
const getMovie = (movie_id) => {
    let URL = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};
const getSeries = (variant = "popular", page = 1) => {
    let URL = `${BASE_URL}/tv/${variant}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};
const getSerie = (serie_id) => {
    let URL = `${BASE_URL}/tv/${serie_id}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};
const getTrendingPersons = (page = 1) => {
    let URL = `${BASE_URL}/trending/person/week?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};
const getFilteredMovies = (genere, rating, year, sort = "popularity.desc") => {
    let URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sort}`;
    if (genere) URL = URL + `&with_genres=${genere}`;
    if (rating)
        URL =
            URL +
            `&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}`;
    if (year) URL = URL + `&year=${year}`;
    return fetchAPI(URL);
};
const getFilteredSeries = (genere, rating, year, sort = "popularity.desc") => {
    let URL = `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=${sort}`;
    if (genere) URL = URL + `&with_genres=${genere}`;
    if (rating)
        URL =
            URL +
            `&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}`;
    if (year) URL = URL + `&first_air_date_year=${year}`;
    return fetchAPI(URL);
};
export {
    fetchAPI,
    getMovies,
    getMovie,
    getSeries,
    getSerie,
    getTrendingPersons,
    getFilteredMovies,
    getFilteredSeries,
};
