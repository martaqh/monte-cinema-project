import axios from "@/api/axiosConfig.js";
import { SCREENINGS } from "@/api/apiEndpoints.js";

export const getScreeningsByDateAndMovie = (screeningsDate, movieId) => {
  const params = {
    date: screeningsDate,
    movie_id: movieId,
  }
  return axios.get(SCREENINGS, { params });
};
