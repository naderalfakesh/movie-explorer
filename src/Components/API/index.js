import { BASE_URL, API_KEY } from "./constants";
const fetchAPI = (URL) => {
    return fetch(URL).then((resp) => resp.json());
};
const getList = (variant = "popular", page = 1, type = "movie") => {
    let URL = `${BASE_URL}/${type}/${variant}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};
const getDetails = (id, type) => {
    let URL = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`;
    console.log(URL);
    return fetchAPI(URL);
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
const getPersons = (variant, page = 1) => {
    let URL = `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};
const getPerson = (person_id) => {
    let URL = `${BASE_URL}/person/${person_id}?api_key=${API_KEY}`;
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
const getFilteredList = (
    genere,
    rating,
    year,
    sort = "popularity.desc",
    type = "movie"
) => {
    let URL = `${BASE_URL}/discover/${type}?api_key=${API_KEY}&sort_by=${sort}`;
    if (genere) URL = URL + `&with_genres=${genere}`;
    if (rating)
        URL =
            URL +
            `&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}`;
    if (year) URL = URL + `&year=${year}&first_air_date_year=${year}`; // different variable in movies and series
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

const search = (type = "multi", query, page = 1) => {
    let URL = `${BASE_URL}/search/${type}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
    return fetchAPI(URL);
};

export {
    fetchAPI,
    getList,
    getDetails,
    getMovies,
    getMovie,
    getSeries,
    getSerie,
    getPersons,
    getPerson,
    getTrendingPersons,
    getFilteredMovies,
    getFilteredSeries,
    getFilteredList,
    search,
};
