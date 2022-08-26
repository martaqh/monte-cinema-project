<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/SectionTitle.vue';
import AppButton from '@/components/common/AppButton.vue';
import TheContainer from '@/components/common/TheContainer.vue';
export default defineComponent({
  components: { SectionTitle, TheContainer, AppButton }
});
</script>

<template>
  <TheContainer class="of-welcome-section">
    <div class="welcome-section">
      <div class="welcome-message">
        <SectionTitle size="large">
            Welcome to the best cinema in Monterail
        </SectionTitle>
        <p class="welcome-text">
            Best movies, best experiences, best people.
            And all that doesn’t exist. Yikes.
        </p>
        <AppButton href="http://monterail.com" size="large" colorScheme="main">Book a ticket</AppButton>
      </div>
      <div class="welcome-image-wrapper">
        <img src="@/assets/PeopleInCinema.png" class="welcome-image" alt="People in cinema" />
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.welcome-section {
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: $color-tag-background;

  @include mobile {
    text-align: center;
  }
}
.welcome-message {
  display: flex;
  flex-direction: column;
  width: 66%;
  padding: 80px;

  .welcome-text {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 170%;
    letter-spacing: 0.015em;
    margin: 40px 0;
  }

  @include mobile {
    align-items: center;
  }
}
.welcome-image-wrapper {
  min-width: 34%;
  display: none;

  @include desktop-large {
    display: block;
  }
}
.welcome-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
