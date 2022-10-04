<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';
import AppInput from '@/components/common/App/AppInput.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import FormCard from '@/components/views/FormCard.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import ValidationMessage from '@/components/common/Form/ValidationMessage.vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  components: {
    TheContainer,
    AppInput,
    AppButton,
    FormCard,
    SectionSubtitle,
    SectionTitle,
    ValidationMessage
  },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data() {
    return {
      email: '',
      password: '',
      emailTouched: false,
      passwordTouched: false,
    }
  },
  computed: {
    isLoggedIn() {
      return this.auth.isLoggedIn
    },
    emailErrorMessage() {
      if (this.email === '' && this.emailTouched) {
        return 'Please enter your email'
      }
      return ''
    },
    passwordErrorMessage() {
      if (this.password === '' && this.passwordTouched) {
        return 'Please enter your password'
      }
      return ''
    },
    isFormValid() {
      return this.emailProvided && this.passwordProvided
    }
  },
  methods: {
    allTouched() {
      this.emailTouched = true;
      this.passwordTouched = true;
    },
    async handleLogin() {
      this.allTouched();
      try {
        await this.auth.login({
          email: this.email,
          password: this.password
        })
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
      <div class="login-page__header">
        <SectionTitle size="large">Hi there!</SectionTitle>
        <SectionSubtitle size="large">Care to log in?</SectionSubtitle>
      </div>
      <FormCard>
        <form
          @submit.prevent="handleLogin"
        >
          <AppInput
            label="e-mail"
            type="email"
            placeholder="Something ending with monterail.com"
            v-model="email"
            @blur="emailTouched = true"
            :is-valid="!emailErrorMessage"
          />
          <ValidationMessage
            v-if="emailErrorMessage"
            class='not-valid'
          >
            {{ emailErrorMessage }}
          </ValidationMessage>
          <AppInput
            label="password"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            @blur="passwordTouched = true"
            :is-valid="!passwordErrorMessage"
          />
          <ValidationMessage
            v-if="passwordErrorMessage"
            class='not-valid'
          >
            {{ passwordErrorMessage }}
          </ValidationMessage>
          <div class="login-page__buttons">
            <AppButton
              size="large"
              color-scheme="no-border"
              usage="form"
              :to="{name: 'Register'}"
            >
              Register instead
            </AppButton>
            <AppButton
              size="large"
              color-scheme="main"
              usage="form"
            >
              Log in
            </AppButton>
          </div>
        </form>
      </FormCard>
      <p class="reset-password-link">Did you forget your password?
        <router-link :to="{name: 'Home'}">
          <span>Reset it now</span>
        </router-link>
      </p>
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.login-page__header {
  @include mobile {
    text-align: center;
  }
}
.login-page__buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
    width: 100%;
  }
}

.reset-password-link {
  margin-bottom: 100px;
  font-family: $font-main;
  font-size: 16px;
  line-height: 170%;
  letter-spacing: 0.04em;

  span {
    color: $color-brand;
  }
}
</style>
