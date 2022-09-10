<template>
  <div class="validation-message">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.validation-message {
  margin-top: 8px;
  font-size: 14px;
  font-family: $font-main;
  color: $color-text-main;
  letter-spacing: 0.04em;
  line-height: 170%;

  &[id='2'] {
    margin-top: 0;
  }

  &[id='3'] {
    margin-top: 0;
  }
}

.valid {
  color: $color-success;
}

.not-valid {
  color: $color-brand;
}
.disapear {
  display: none;
}
</style>
