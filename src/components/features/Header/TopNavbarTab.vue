<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    
  }
});
</script>

<template>
  <a
    class="top-navbar-tab"
    @click="isActive = true"
  >
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
.top-navbar-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33%;
  color: $color-text-light;
}
</style>
