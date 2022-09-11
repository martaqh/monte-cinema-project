<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import TheHeader from '@/components/views/TheHeader.vue';

export default defineComponent({
  components: { TheHeader },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  created() {
    this.auth.restoreUserData();
  },
});
</script>

<template>
  <main class="app">
    <TheHeader />
    <router-view />
  </main>
</template>

<style scoped>

</style>
