<script>
import AppButton from '@/components/common/App/AppButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { AppButton }
});
</script>

<template>
  <div class="bread-crumbs">
    <AppButton
      color-scheme="dark-reverse"
      arrow="left"
      class="bread-crumbs__button"
      @click="this.$router.go(-1)"
    >
    Back</AppButton>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.bread-crumbs {
  padding: 24px;
  width: 100%;
  background-color: $color-tag-background;
  display: flex;
  align-items: center;
  font-family: $font-mono;

  &__button {
    margin-right: 32px;
  }
}
</style>
