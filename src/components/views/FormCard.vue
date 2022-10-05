<template>
  <div class="form-card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.form-card {
  display: flex;
  flex-direction: column;
  padding: 40px 64px 64px 64px;
  margin-bottom: 40px;
  max-width: 603px;
  min-width: 220px;
  box-shadow: $shadow-form;
  border-radius: 24px;

  @include mobile {
    border: none;
    box-shadow: none;
    padding: 20px;
  }
}
</style>
