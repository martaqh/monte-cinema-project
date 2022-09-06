<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/common/App/AppButton.vue';
import TheContainer from '@/components/common/TheContainer.vue';

export default defineComponent({
  components: { AppButton, TheContainer }
});
</script>

<template>
  <TheContainer>
    <div class="not-found">
      <h1>Ups, we haven't found a page that you were looking for.</h1>
      <AppButton
        :to="{ name: 'Home' }"
        color-scheme="main"
      >
        Go back to home page
      </AppButton>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;

  h1 {
    font-size: 40px;
    font-family: $font-title;
    padding: 40px 0;
  }
}
</style>
