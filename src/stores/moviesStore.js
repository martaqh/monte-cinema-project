import { defineStore } from 'pinia';
import { getAllMovies } from '@/api/service/movies';

export default defineStore('movies', {
  state: () => ({
    movies: [],
  }),
  getters: {
    moviesCategories() {
      const allCategories = this.movies.map(movie => movie.genre.name)
      return new Set(allCategories)
    },
  },
  actions: {
    async getMoviesToState() {
      const response = await getAllMovies();
      this.movies = response.data;
    }
  },
})
