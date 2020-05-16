import { BASE_URL, API_KEY } from "./constants";
const fetchAPI = (subject = "movie", variant = "popular") => {
    let URL = `${BASE_URL}/${subject}/${variant}?api_key=${API_KEY}`;
    console.log(URL);
    return fetch(URL).then((resp) => resp.json());
};
export { fetchAPI };
