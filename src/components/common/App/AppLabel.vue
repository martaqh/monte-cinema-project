<template>
  <label class="app-label">
    <slot></slot>
  </label>
</template>

<style lang="scss" scoped>
.app-label {
  display: block;
  font-family: $font-mono;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: $color-text-label;
  margin-bottom: 12px;
  width: fit-content;
}
</style>
