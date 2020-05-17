import { BASE_URL, API_KEY } from "./constants";
const fetchAPI = (URL) => {
    return fetch(URL).then((resp) => resp.json());
};
const getMovies = (variant = "popular") => {
    let URL = `${BASE_URL}/movie/${variant}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};
const getMovie = (movie_id) => {
    let URL = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};
const getSeries = (variant = "popular") => {
    let URL = `${BASE_URL}/tv/${variant}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};
const getSerie = (serie_id) => {
    let URL = `${BASE_URL}/tv/${serie_id}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};
export { fetchAPI, getMovies, getMovie, getSeries, getSerie };
