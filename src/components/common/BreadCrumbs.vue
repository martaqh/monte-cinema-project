<script>
import AppButton from '@/components/common/App/AppButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { AppButton },
  props: {
    variant: {
      type: String,
      default: 'basic',
      validator(value) {
        return [
          'basic',
          'progress-bar'
        ].includes(value);
      },
    }
  }
});
</script>

<template>
  <div
    class="bread-crumbs"
    :variant="variant"
  >
    <AppButton
      v-if="variant === 'basic'"
      color-scheme="dark-reverse"
      arrow="left"
      class="bread-crumbs__button"
      usage="bread-crumbs"
      @click="$router.go(-1)"
    >
      <span>Back</span>
    </AppButton>
    <slot class="bread-crumbs__slot"></slot>
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
    margin: 0 24px;

    span {
      @include mobile {
        display: none;
      }
    }
  }
}

.bread-crumbs[variant="progress-bar"] {
  justify-content: center;
}
</style>
