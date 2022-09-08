<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';
import AppInput from '@/components/common/App/AppInput.vue';
import FormCard from '@/components/views/FormCard.vue';
import ValidationMessage from '@/components/common/Form/ValidationMessage.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import TheHeader from '@/components/views/TheHeader.vue';

export default defineComponent({
  components: {
    TheContainer,
    AppInput,
    FormCard,
    ValidationMessage,
    AppButton,
    SectionTitle,
    SectionSubtitle,
    TheHeader,
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
    emailError() {
      if (!this.email && this.emailTouched) {
        return 'Please enter your email'
      }
      if (this.email && this.emailTouched && !this.isValidEmail(this.email)) {
        return 'Please enter CORRECT email'
      }
      return ''
    },
  },
  methods: {
    isValidEmail(input) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input)
    },
    hasOneDigit(input) {
      return /\d/.test(input)
    },
    hasOneLetter(input) {
      return /[a-zA-Z]/.test(input)
    },
    isLongEnough(input) {
      return input.length >= 8 ? true : false
    },
  }
});
</script>

<template>
  <div class="reg-step-one">
    <TheContainer>
      <TheHeader>

      </TheHeader>
    </TheContainer>
    <TheContainer variant="form">
      <SectionTitle size="large">Ahoy you!</SectionTitle>
      <SectionSubtitle size="large">Care to register?</SectionSubtitle>
      <FormCard>
        <AppInput
          label="e-mail"
          type="email"
          placeholder="Something ending with monterail.com"
          v-model="email"
          @blur="emailTouched = true"
        />
        <ValidationMessage
          v-if="emailError"
          class='not-valid'
        >
          {{ emailError }}
        </ValidationMessage>
        <AppInput
          label="password"
          type="password"
          placeholder="Enter your password"
          v-model="password"
          @blur="passwordTouched = true"
        />
        <ValidationMessage
          :class="isLongEnough(password) ? 'valid' : 'not-valid'"
        >
          At least 8 characters
        </ValidationMessage>
        <ValidationMessage
          :class="hasOneLetter(password) ? 'valid' : 'not-valid'"
        >
          At least one letter
        </ValidationMessage>
        <ValidationMessage
          :class="hasOneDigit(password) ? 'valid' : 'not-valid'"
        >
          At least one digit
        </ValidationMessage>
        <div class="reg-setp-one__buttons">
          <AppButton
            size="large"
            color-scheme="no-border"
          >
            Log in instead
          </AppButton>
          <AppButton
            size="large"
            color-scheme="main"
          >
            Next step
          </AppButton>
        </div>
      </FormCard>
    </TheContainer>


  </div>
</template>

<style lang="scss" scoped>
.reg-setp-one__buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
