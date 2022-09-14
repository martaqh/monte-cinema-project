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
    async fetchMoviesToState() {
      const response = await getAllMovies();
      this.movies = response.data;
    },
    getMovieByMovieId(movieId) {
      return this.movies.find(movie => movie.id === movieId)
    }
  },
})
