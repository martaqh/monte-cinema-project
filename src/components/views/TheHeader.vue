<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';

export default defineComponent({
  components: {
    TheContainer,
  }
})
</script>

<template>
  <TheContainer>
    <div class="header">
      <a href="/">
        <img
        src="@/assets/MonterailLogo.svg"
        class="logo"
        alt="Monterail logo"
        />
      </a>
      <a href="#">
        <img
          src="@/assets/HamburgerMenu.svg"
          class="header__hamburger-menu"
          alt="Hamburger menu"
        />
      </a>
      <div class="header__slot">
        <slot ></slot>
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.header {
  height: 112px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__hamburger-menu {
  display: none;

  @include mobile {
    display: block;
  }
}
.header__slot {
  width: 75%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @include mobile {
    display: none;
  }
}
</style>
