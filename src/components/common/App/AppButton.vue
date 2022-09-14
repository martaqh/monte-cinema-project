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
    usage: {
      type: String,
      default: 'common',
      validator(value) {
        return [
          'common',
          'form',
        ].includes(value);
      },
    },
    arrow: {
      type: String,
      default: 'none',
      validator(value) {
        return [
          'left',
          'right',
          'none'
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
    buttonType() {
      return this.usage === 'form' ? 'submit' : 'button'
    }
  },
});
</script>

<template>
  <component
    :is="componentVariant"
    :to="to"
    :href="href"
    class="button-base"
    :size="size"
    :color-scheme="colorScheme"
    :arrow="arrow"
    :usage="usage"
    :type="buttonType"
    @click="this.$emit('clicked')"
  >
    <img
      v-if="arrow === 'left'"
      src="@/assets/ArrowLeft.svg"
      alt="arrow left"
      class="button-base__arrow--left"
    />
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

  &__arrow--left {
    margin-right: 12px;
  }
}

.button-base[color-scheme="main"] {
  border: 2px solid $color-brand;
  background-color: $color-brand;
  color: $color-text-reverse;
}

.button-base[color-scheme="main-reverse"] {
  border: 2px solid $color-brand;
  color: $color-brand;
  background: inherit;
}

.button-base[color-scheme="dark"] {
  border: 2px solid $color-text-main;
  background-color: $color-text-main;
  color: $color-text-reverse;
}

.button-base[color-scheme="dark-reverse"] {
  border: 2px solid $color-text-main;
  color: $color-text-main;
  background: inherit;
}

.button-base[color-scheme="no-border"] {
  border: 2px solid transparent;
  color: $color-brand;
  background-color: inherit;
}

.button-base[size="large"] {
    height: 56px;
    font-size: 18px;
}

.button-base[size="medium"] {
    height: 40px;
    font-size: 16px;
}

.button-base[size="small"] {
    height: 32px;
    font-size: 14px;
}

.button-base[size="tiny"] {
    height: 24px;
    font-size: 14px;
}

.button-base[usage="form"] {
  width: 100%;
  padding: 0;
}
</style>
