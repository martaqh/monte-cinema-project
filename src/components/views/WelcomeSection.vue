<script>
import { defineComponent } from 'vue';
import SectionTitle from '@/components/common/SectionTitle.vue';
import ButtonlikeLink from '@/components/common/ButtonlikeLink.vue';
import TheContainer from '@/components/common/TheContainer.vue';
export default defineComponent({
  components: { SectionTitle, ButtonlikeLink, TheContainer }
});
</script>

<template>
  <TheContainer class="of-welcome-section">
    <div class="welcome-section">
      <div class="welcome-message">
        <SectionTitle class="size-80">
            Welcome to the best cinema in Monterail
        </SectionTitle>
        <p>
            Best movies, best experiences, best people.
            And all that doesn’t exist. Yikes.
        </p>
        <ButtonlikeLink class="primary size-56">Book a ticket</ButtonlikeLink>
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

    @media only screen and (max-width: 540px) {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}
.welcome-message {
    display: flex;
    flex-direction: column;
    width: 66%;
    padding: 80px;

    p {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 170%;
        letter-spacing: 0.015em;
        margin: 40px 0;
    }


}

.welcome-image-wrapper {
    min-width: 34%;

    @media only screen and (max-width: 1024px) {
        display: none;
    }
}

.welcome-image {
    width: 100%;
    height: 100%;
    object-fit: cover;


}

</style>
