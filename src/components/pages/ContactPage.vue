<script>
import { defineComponent } from 'vue';
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ContactSection from '@/components/views/ContactSection.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';


export default defineComponent({
  components: { BreadCrumbs, ContactSection, SectionTitle },

});
</script>

<template>
  <div class="contact-page">
    <BreadCrumbs>Contact us</BreadCrumbs>
    <SectionTitle>Contact us</SectionTitle>
    <div class="contact-page__content">
      <img src="@/assets/LocationMap.jpg">
      <ContactSection />
      <div class="contact-page__social-links">
        <a><img></img></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.contact-page__content {
  margin-top: 64px;
  display: flex;
  height: fit-content;
  background-color: $color-field-background;

  img {
    object-fit: cover;
  }
}
.contact-page__social-links {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
}
</style>
