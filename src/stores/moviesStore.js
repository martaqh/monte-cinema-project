import { defineStore } from 'pinia';
import { getAllMovies } from '@/api/service/movies';

export default defineStore('movies', {
  state: () => ({
    movies: [],
  }),
  getters: {

  },
  actions: {
    async getMoviesToState() {
      const response = await getAllMovies();
      this.movies = response.data;
    }
  },
})
