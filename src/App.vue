<script setup>
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';
import TheHeader from '@/components/views/TheHeader.vue';

</script>

<template>
  <main class="app">
    <TheHeader>
      <TopNavbar />
      <SignSection />
    </TheHeader>
    <router-view />
  </main>
</template>

<style scoped>
.app {
  margin: 0 auto;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

</style>
