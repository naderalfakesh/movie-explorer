import { BASE_URL, API_KEY } from "./constants";
const fetchAPI = (URL) => {
    return fetch(URL).then((resp) => resp.json());
};
const getList = (variant = "popular", page = 1, type = "movie") => {
    let URL = `${BASE_URL}/${type}/${variant}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};
const getFilteredList = (
    genere,
    rating,
    year,
    type = "movie",
    page = 1,
    sort = "popularity.desc"
) => {
    let URL = `${BASE_URL}/discover/${type}?api_key=${API_KEY}&sort_by=${sort}&page=${page}`;
    if (genere) URL = URL + `&with_genres=${genere}`;
    if (rating)
        URL =
            URL +
            `&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}`;
    if (year) URL = URL + `&year=${year}&first_air_date_year=${year}`; // different variable in movies and series
    return fetchAPI(URL);
};
const getDetails = (id, type) => {
    let URL = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`;
    return fetchAPI(URL);
};

const getTrendingPersons = (page = 1) => {
    let URL = `${BASE_URL}/trending/person/week?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetchAPI(URL);
};

const search = (type = "multi", query, page = 1) => {
    let URL = `${BASE_URL}/search/${type}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
    return fetchAPI(URL);
};

export {
    fetchAPI,
    search,
    getDetails,
    getFilteredList,
    getList,
    getTrendingPersons,
};
