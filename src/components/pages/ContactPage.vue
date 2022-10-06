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
        <div class="contact-page__content--coordinates">
          <img class="map" src="@/assets/LocationMap.jpg">
          <ContactSection />
        </div>

        <div class="contact-page__social-links-wrapper">
          <AppButton
            v-for="link in links"
            :key="link"
            class=""
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

.contact-page {
  margin-bottom: 100px;

  &__content {
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  background-color: $color-field-background;

  &--coordinates {
    display: flex;

    @include mobile {
      flex-direction: column;
    }
  }

  .map {
    object-fit: cover;

    @include desktop {
      max-width: 50%;
    }

    @include tablet {
      max-width: 50%;
    }
  }

  @include mobile {
    flex-direction: column;
  }
}
}
.contact-page__social-links-wrapper {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 30px;
  padding: 24px;

  @include mobile {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 5px;
  }
}
</style>
