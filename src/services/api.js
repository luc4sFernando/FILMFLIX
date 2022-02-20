import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const fetchMovies = async (path) => {
  const {
    data: { results },
  } = await axios.get(`${path}&api_key=${API_KEY}`);

  return results;
};

export const fetchVideo = async (movieId) => {
  const {
    data: { results },
  } = await axios.get(
    `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );

  return results;
};
export const fetchAllMovies = async() =>{
  const {data: {results}, } = await axios.get(`/movie/upcoming?api_key=${API_KEY}`);

  return results;
}
