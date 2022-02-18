import axios from "axios";

import { API_BASE_URL, API_KEY } from "../configs/constants";

axios.defaults.baseURL = API_BASE_URL;

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
