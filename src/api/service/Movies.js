import axios from "@/api/axiosConfig.js";
import { MOVIES } from "@/api/apiEndpoints.js";

export const getAllMovies = () => {
  return axios.get(MOVIES);
};
/*export const getMovieById = (movieId) => {
  const params = {
    movie_id: movieId
  }
  return axios.get(MOVIES, { params });
}; */

export const getMovieById = (movieId) => {
  return axios.get(`${MOVIES}/${movieId}`);
};
