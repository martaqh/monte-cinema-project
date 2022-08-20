<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return [
          'large',
          'medium',
          'small',
          'tiny'
        ].includes(value);
      },
    },
    colorScheme: {
      type: String,
       default: 'main',
       validator(value) {
        return [
          'main',
          'main-reverse',
          'dark',
          'dark-reverse',
          'no-border'
        ].includes(value);
      },
    },
    to: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: 'link-button',
      validator(value) {
        return [
          'filter-button',
          'form-button',
          'link-button',
        ].includes(value);
      },
    }
  },
  computed: {
    componentVariant() {
      return (this.to || this.variant === 'link-button') ? 'a' : 'button'
    },
  }
});
</script>

<template>
  <component
    :is="componentVariant"
    :to="this.to"
    class="button-base"
    :size=this.size
    :colorScheme=this.colorScheme
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.button-base {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: $radius-button;
  font-family: $font-mono;
  padding: 0 40px;

}
.button-base[colorScheme="main"] {
  border: 2px solid $color-brand;
  background-color: $color-brand;
  color: $color-text-reverse;
}

.button-base[colorScheme="main-reverse"] {
  border: 2px solid $color-brand;
  color: $color-brand;
  background: inherit;
}

.button-base[colorScheme="dark"] {
  border: 2px solid $color-text-main;
  background-color: $color-text-main;
  color: $color-text-reverse;
}

.button-base[colorScheme="dark-reverse"] {
  border: 2px solid $color-text-main;
  color: $color-text-main;
  background: inherit;
}

.button-base[colorScheme="no-border"] {
  border: none;
  color: $color-brand;
  background-color: inherit;
}

.button-base[size="large"] {
    height: 56px;
    font-size: 18px;
    width: fit-content;
}

.button-base[size="medium"] {
    height: 40px;
    font-size: 16px;
    width: fit-content;
}

.button-base[size="small"] {
    height: 32px;
    font-size: 14px;
    width: fit-content;
}

.button-base[size="tiny"] {
    height: 24px;
    font-size: 14px;
    width: fit-content;
}
</style>
