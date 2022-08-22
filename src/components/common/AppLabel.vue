<template>
  <div class="label">
    <label >
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.label {
    font-family: $font-mono;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: $color-text-label;
    margin-bottom: 12px;
}
</style>
