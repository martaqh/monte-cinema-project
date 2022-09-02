<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  padding: 0 48px;
  margin: 0 auto;

  @include mobile {
    padding: 0 24px;

    &.of-welcome-section {
      padding: 0;
    }
  }
}
</style>
