import { defineStore } from 'pinia';
import { getScreeningById } from '@/api/service/Screenings';

export default defineStore('movies', {
  state: () => ({
    screeningData: [],
  }),
  getters: {

  },
  actions: {
    async getScreeningData() {
      const response = await getScreeningById();
      this.screeningData = response.data;
    }
  },
})
