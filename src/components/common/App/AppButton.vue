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
      type: [Object, String],
      required: false,
    },
    href: {
      type: String,
      required: false
    },
    buttonType: {
      type: String,
      default: 'button',
      validator(value) {
        return [
          'button',
          'submit'
        ].includes(value);
      },
    }
  },
  computed: {
    componentVariant() {
      if (this.to) {
        return 'router-link'
      } else if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
  }
});
</script>

<template>
  <component
    :is="componentVariant"
    :to="to"
    :href="href"
    class="button-base"
    :size="size"
    :colorScheme="colorScheme"
    :type="buttonType"
    @click="this.$emit('clicked')"
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
  cursor: pointer;
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
