<script>
import { defineComponent } from 'vue';
import WelcomeSection from '@/components/views/WelcomeSection.vue';
import MoviesSummary from '@/components/views/MoviesSummary.vue';
import ScreeningsSection from '@/components/views/ScreeningsSection.vue';
import { mapActions } from "pinia";
import movies from '@/stores/moviesStore'
import ContactSection from '@/components/views/ContactSection.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';

export default defineComponent({
  components: {
    WelcomeSection,
    MoviesSummary,
    ScreeningsSection,
    SectionTitle,
    ContactSection
  },
  methods: {
    ...mapActions(movies, ["getMoviesToState"]),
  },
  beforeMount() {
    this.getMoviesToState()
  }
});
</script>

<template>
  <div class="home-page">
    <WelcomeSection />
    <MoviesSummary />
    <ScreeningsSection />
    <div class="contact">
      <SectionTitle size="medium">Contact us</SectionTitle>
      <ContactSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $color-text-main;
  padding: 0;
}
.contact {
  margin-top: 188px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

</style>
