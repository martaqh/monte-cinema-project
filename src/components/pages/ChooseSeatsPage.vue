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
  <div>
    <h2>Choose seats!</h2>
    <AppButton
      v-if="isLoggedIn"
      @click="this.auth.logout()"
    >
      Log out
    </AppButton>
  </div>
</template>
