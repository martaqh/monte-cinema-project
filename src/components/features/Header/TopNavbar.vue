<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      navbarTabs: [
        {to: {name: 'Movies'}, label: 'Movies'},
        {to: {name: 'Screenings'}, label: 'Screenings'},
        {to: {name: 'Home'}, label: 'Contact us'},
      ],
      activeTab: '',
      isActive: false,
    }
  },
});
</script>

<template>
  <div class="top-navbar">
    <router-link
      v-for="tab in navbarTabs"
      :to="tab.to"
      :key="tab.label"
      class="top-navbar__tab"
      :is-active="activeTab === tab.label"
      @click="activeTab = tab.label"
    >
    {{ tab.label }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.top-navbar {
  display: flex;
  min-width: 424px;
  height: 112px;
  align-items: center;
  font-family: $font-main;
  font-size: 18px;
  color: $color-text-light;
}

.top-navbar__tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33%;
  color: $color-text-light;
}

.top-navbar__tab[is-active='true'] {
  border-bottom: 3px solid $color-brand;
  font-weight: 700;
  color: $color-text-highlighted;
}
</style>
