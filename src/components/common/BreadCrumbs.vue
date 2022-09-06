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
      @click="$router.go(-1)"
    >
      Back
    </AppButton>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.bread-crumbs {
  display: flex;
  align-items: center;
  padding: 24px 0;
  margin-bottom: 64px;
  width: 100%;
  background-color: $color-tag-background;
  font-family: $font-mono;

  &__button {
    margin-left: 24px;
  }
}
</style>
