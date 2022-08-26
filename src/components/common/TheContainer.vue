<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 48px;

  @include mobile {
    padding: 0 24px;

    &.of-welcome-section {
      padding: 0;
    }
  }
}
</style>
