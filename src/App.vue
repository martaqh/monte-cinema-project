<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  created() {
    this.auth.restoreUserData();
  }
});
</script>
<template>
  <main class="app">
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
