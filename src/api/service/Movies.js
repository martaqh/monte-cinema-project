import { defaultClient } from "@/api/axiosConfig.js";
import { MOVIES } from "@/api/apiEndpoints.js";

export const getAllMovies = () => {
  return defaultClient.get(MOVIES);
};

export const getMovieById = (movieId) => {
  return defaultClient.get(`${MOVIES}/${movieId}`);
};
