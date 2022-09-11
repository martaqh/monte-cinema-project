<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/common/App/AppButton.vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  components: { AppButton },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  computed: {
    isLoggedIn() {
      return this.auth.isLoggedIn
    }
  }
});
</script>

<template>
  <div class="sign-section">
    <AppButton
      :to="{ name: 'Register' }"
      size="medium"
      color-scheme="no-border"
    >
    Register
    </AppButton>
    <AppButton
      v-if="!isLoggedIn"
      :to="{ name: 'Login' }"
      size="medium"
      color-scheme="main"
    >
    Log in
    </AppButton>
    <AppButton
        v-if="isLoggedIn"
        @click="this.auth.logout()"
        color-scheme="main-reverse"
      >
        Log out
      </AppButton>
  </div>
</template>

<style lang="scss" scoped>
.sign-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-family: $font-mono;
  font-size: 16px;
}
</style>
