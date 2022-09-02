<script setup>
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import TheHeader from '@/components/views/TheHeader.vue';

</script>

<template>
  <main class="app">
    <TheContainer>
      <TheHeader>
        <TopNavbar />
        <SignSection />
      </TheHeader>
      <router-view />
    </TheContainer>
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
