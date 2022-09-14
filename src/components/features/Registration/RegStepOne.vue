<script>
import { defineComponent } from 'vue';
import AppInput from '@/components/common/App/AppInput.vue';
import FormCard from '@/components/views/FormCard.vue';
import ValidationMessage from '@/components/common/Form/ValidationMessage.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import { isEmailValid, hasOneDigit, hasOneLetter, isLongEnough } from '@/helpers/validationHelpers';

export default defineComponent({
  components: {
    AppInput,
    FormCard,
    ValidationMessage,
    AppButton,
    SectionTitle,
    SectionSubtitle,
  },
  data() {
    return {
      email: '',
      password: '',
      emailTouched: false,
      passwordTouched: false,
    }
  },
  emits: ['completed'],
  computed: {
    checks() {
      return {
        isEmailValid: isEmailValid(this.email),
        hasOneDigit: hasOneDigit(this.password),
        hasOneLetter: hasOneLetter(this.password),
        has8Digits: isLongEnough(this.password, 8)
      }
    },
    emailErrorMessage() {
      if (!this.email && this.emailTouched) {
        return 'Please enter your email'
      }
      if (this.email && this.emailTouched && !isEmailValid(this.email)) {
        return 'Please enter CORRECT email'
      }
      return ''
    },
  },
  methods: {
    isPasswordValid() {
      return this.password !== '' &&
        this.passwordTouched === true &&
        hasOneDigit(this.password) &&
        hasOneLetter(this.password) &&
        isLongEnough(this.password, 8)
    },
    isFormValid() {
      return this.checks.isEmailValid && this.isPasswordValid()
    },
    allTouched() {
      this.emailTouched = true;
      this.passwordTouched = true;
    },
    handleSubmit() {
      this.allTouched();
      if (this.isFormValid()) {
        this.$emit('completed', { email: this.email, password: this.password })
      } else {
        console.error('Data is NOT valid')
      }
    },
  }
});
</script>

<template>
  <div class="reg-step-one">
    <div class="reg-step-one__header">
      <SectionTitle size="large">Ahoy you!</SectionTitle>
      <SectionSubtitle size="large">Care to register?</SectionSubtitle>
    </div>
    <FormCard>
      <form
        class="reg-step-one__form"
        @completed="onStep1Completed"
        @submit.prevent="handleSubmit"
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
          :isValid="passwordTouched ? isPasswordValid() : true"
        />
        <div class="reg-step-one__password--validation-messages">
          <ValidationMessage
            :class="checks.has8Digits ?
            'valid' : passwordTouched ? 'not-valid' : null"
          >
            At least 8 characters
          </ValidationMessage>
          <ValidationMessage
            :class="checks.hasOneLetter ?
            'valid' : passwordTouched ? 'not-valid' : null"
          >
            At least one letter
          </ValidationMessage>
          <ValidationMessage
            :class="checks.hasOneDigit ?
            'valid' : passwordTouched ? 'not-valid' : null"
          >
            At least one digit
          </ValidationMessage>
        </div>
        <div class="reg-step-one__buttons">
          <AppButton
            size="large"
            color-scheme="no-border"
            usage="form"
            :to="{name:'Login'}"
          >
            Log in instead
          </AppButton>
          <AppButton
            size="large"
            color-scheme="main"
            usage="form"
          >
            Next step
          </AppButton>
        </div>
      </form>
      </FormCard>
  </div>
</template>

<style lang="scss" scoped>
.reg-step-one__header {
  @include mobile {
    text-align: center;
  }
}

.reg-step-one__buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
    width: 100%;
  }
}

.reg-step-one__password--validation-messages {

  :nth-child(2) {
    margin: 0;
  }

  :nth-child(3) {
    margin: 0;
  }
}

</style>
