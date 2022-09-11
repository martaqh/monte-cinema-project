<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';
import AppInput from '@/components/common/App/AppInput.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import FormCard from '@/components/views/FormCard.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  components: {
    TheContainer,
    AppInput,
    AppButton,
    FormCard,
    SectionSubtitle,
    SectionTitle
  },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data() {
    return {
      isRequestFinished: false,

      email: '',
      password: '',
    }
  },
  computed: {
    isLoggedIn() {
      return this.auth.isLoggedIn
    }
  },
  methods: {
    async handleLogin() {
      try {
        await this.auth.login({
          email: this.email,
          password: this.password
        })
        this.$router.push({name: 'ChooseSeats'})
      } catch (error) {
        console.error(error)
      }
    }
  }
})
</script>

<template>
  <div class="login-page">
    <TheContainer variant="form">
      <SectionTitle size="large">Hi there!</SectionTitle>
      <SectionSubtitle size="large">Care to log in?</SectionSubtitle>
      <FormCard>
        <form
          @submit="handleSubmit"
        >
          <AppInput
            label="e-mail"
            type="email"
            placeholder="Something ending with monterail.com"
            v-model="email"
            @blur="emailTouched = true"
            :is-valid="!emailErrorMessage"
          />

          <AppInput
            label="password"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            @blur="passwordTouched = true"
            :is-valid="paswordTouched && isPasswordValid(password)"
          />

          <div class="login-page__buttons">
            <AppButton
              size="large"
              color-scheme="no-border"
              usage="form"
            >
              Register instead
            </AppButton>
            <AppButton
              size="large"
              color-scheme="main"
              usage="form"
              @click="handleLogin()"
            >
              Log in
            </AppButton>
          </div>
        </form>
      </FormCard>
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
  .login-page__buttons {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  </style>
