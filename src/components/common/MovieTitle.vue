<template>
  <p class="movie-title">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
  .movie-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  font-family: $font-main;
  }
</style>
