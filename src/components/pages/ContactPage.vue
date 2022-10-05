<script setup>
import BreadCrumbs from '@/components/common/BreadCrumbs.vue';
import ContactSection from '@/components/views/ContactSection.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import TheContainer from '@/components/common/TheContainer.vue';

import AppButton from '@/components/common/App/AppButton.vue';

const links = {
  twitter: {
    path: "https://twitter.com",
    icon: "src/assets/TwitterIcon.svg"
  },
  facebook: {
    path: "http://facebook.com",
    icon: "src/assets/FacebookIcon.svg"
  },
  linkedin: {
    path: "http://linkedin.com",
    icon: "src/assets/LinkedinIcon.svg"
  },
  instagram: {
    path: "http://instagram.com",
    icon: "src/assets/InstagramIcon.svg"
  },
  github: {
    path: "http://github.com",
    icon: "src/assets/GithubIcon.svg"
  },
  behance: {
    path: "http://behance.com",
    icon: "src/assets/BehanceIcon.svg"
  },
  dribbble: {
    path: "https://dribbble.com/",
    icon: "src/assets/DribbbleIcon.svg"
  },
}
</script>

<template>
  <TheContainer>
    <div class="contact-page">
      <BreadCrumbs>Contact us</BreadCrumbs>
      <SectionTitle>Contact us</SectionTitle>
      <div class="contact-page__content">
        <img src="@/assets/LocationMap.jpg">
        <ContactSection />
        <div class="contact-page__social-links">
          <AppButton
            v-for="link in links"
            :key="link"
            usage="contact"
            color-scheme="grey"
            :href="link.path">
            <img :src="link.icon" />
          </AppButton>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.contact-page__content {
  position: relative;
  margin-top: 64px;
  display: flex;
  height: fit-content;
  background-color: $color-field-background;

  img {
    object-fit: cover;
  }
}
.contact-page__social-links {
    position: absolute;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 30px;
    top: 7%;
    left: 96%;
}
</style>
