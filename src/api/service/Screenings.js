import axios from "@/api/axiosConfig.js";
import { SCREENINGS } from "@/api/apiEndpoints.js";

export const getAllScreenings = () => {
  return axios.get(SCREENINGS)
}

export const getScreeningsByDateAndMovie = (screeningsDate, movieId) => {
  const params = {
    movie_id: movieId,
    date: screeningsDate
  }
  return axios.get(SCREENINGS, { params });
};
