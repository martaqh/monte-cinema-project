<script>
import { defineComponent } from 'vue';
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';
export default defineComponent({
  components: { TopNavbar, SignSection }
});
</script>

<template>
  <div class="header">
    <a href="/"><img src="@/assets/MonterailLogo.svg" class="logo" alt="Monterail logo" /></a>
    <a href="#"><img src="@/assets/HamburgerMenu.svg" class="hamburger-menu" alt="Hamburger menu"/></a>
    <div class="header-slot">
      <slot ></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;

  @media only screen and (max-width: 480px) {
    padding: 0 24px;
  }
}
.hamburger-menu {
  @media only screen and (min-width: 768px) {
    display: none;
  }
}
.header-slot {
  width: 75%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: none;
  }
}
</style>
