import axios from "@/api/axiosConfig.js";
import { SCREENINGS } from "@/api/apiEndpoints.js";

export const getAllScreenings = () => {
  return axios.get(SCREENINGS)
}

export const getScreeningsByMovieAndDate = (movieId, date) => {
  return axios.get(`${SCREENINGS}?movie_id=${movieId}&date=${date}`);
};
