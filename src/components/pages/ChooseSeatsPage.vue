<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/common/App/AppButton.vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  components: { AppButton },
  computed: {
    isLoggedIn() {
      return this.auth.isLoggedIn
    }
  },
})
</script>

<template>
  <div class="choose-seats-page">
    <h2>Choose seats!</h2>
    <AppButton
      v-if="isLoggedIn"
      @click="this.auth.logout()"
    >
      Log out
    </AppButton>
    <AppButton
      :to="{ name: 'Home' }"
      color-scheme="main-reverse"
    >
      Go back to home page
    </AppButton>
  </div>
</template>

<style lang="scss" scoped>
.choose-seats-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  > * {
    font-size: 60px;
    margin: 20px;
  }
}
</style>
