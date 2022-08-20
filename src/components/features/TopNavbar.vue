<script>
import { defineComponent } from 'vue';
import TopNavbarTab from './TopNavbarTab.vue';
export default defineComponent({
  components: { TopNavbarTab }
});
</script>

<template>
  <div class="top-nav-bar">
    <TopNavbarTab>Movies</TopNavbarTab>
    <TopNavbarTab>Screenings</TopNavbarTab>
    <TopNavbarTab>Contact us</TopNavbarTab>
  </div>
</template>

<style lang="scss" scoped>
.top-nav-bar {
  display: flex;
  width: 424px;
  height: 100%;
  align-items: center;
  font-family: $font-main;
  font-size: 18px;
  color: $color-text-light;
}
</style>
