import { defaultClient } from "@/api/axiosConfig.js";
import { SCREENINGS } from "@/api/apiEndpoints.js";

export const getScreeningsByDateAndMovie = (screeningsDate, movieId) => {
  const params = {
    date: screeningsDate,
    movie_id: movieId,
  }
  return defaultClient.get(SCREENINGS, { params });
};

export const getScreeningById = (screeningId) => {
  return defaultClient.get(`${SCREENINGS}/${screeningId}`)
}
