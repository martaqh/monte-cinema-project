<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/common/App/AppButton.vue';
export default defineComponent({
  components: { AppButton }
});
</script>

<template>
  <div class="sign-section">
    <AppButton to="/" size="medium" colorScheme="no-border">Register</AppButton>
    <AppButton size="medium" colorScheme="main">Log in</AppButton>
  </div>
</template>

<style lang="scss" scoped>
.sign-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 33%;
  height: 100%;
  font-family: $font-mono;
  font-size: 16px;
}
</style>
