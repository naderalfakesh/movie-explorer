const apiURL = (
    query="",
    page=1
    )=>{
    let URL= ""
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_KEY = "542003918769df50083a13c415bbc602";
    URL = BASE_URL;
    if(query === ""){
      URL += `/movie/popular?api_key=${API_KEY}&page=${page}`
    }
    else{
      URL += `/search/movie?api_key=${API_KEY}&page=${page}&query=${query}&include_adult=false`
    }
    return URL
  }

  const fetchMovies=(query,page)=>{
   return  fetch(apiURL(query,page)).then(resp => resp.json())
  }
  

  export {apiURL,fetchMovies}