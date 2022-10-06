<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import AppButton from '@/components/common/App/AppButton.vue';
export default defineComponent({
  components: { SectionTitle, AppButton }
});
</script>

<template>
    <div class="welcome">
      <div class="welcome__message">
        <SectionTitle size="large">
            Welcome to the best cinema in Monterail
        </SectionTitle>
        <p class="welcome__main-text">
            Best movies, best experiences, best people. <br />
            And all that doesn’t exist. Yikes.
        </p>
        <AppButton
          :to="{name: 'Login'}"
          size="large"
          color-scheme="main"
        >
          Book a ticket
        </AppButton>
      </div>
      <div class="welcome__image-wrapper">
        <img
          src="@/assets/PeopleInCinema.png"
          class="welcome__image"
          alt="People in cinema"
        />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: $color-tag-background;

  @include mobile {
    text-align: center;
  }
}

.welcome__message {
  display: flex;
  flex-direction: column;
  width: 66%;
  padding: 80px;

  .welcome__main-text {
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

.welcome__image-wrapper {
  min-width: 34%;
  display: none;

  @include desktop {
    display: block;
  }

  @include desktop-large {
    display: block;
  }
}

.welcome__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
