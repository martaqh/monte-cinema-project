<script>
import { defineComponent } from 'vue';
import AppInput from '@/components/common/App/AppInput.vue';
import FormCard from '@/components/views/FormCard.vue';
import ValidationMessage from '@/components/common/Form/ValidationMessage.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';

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
    emailErrorMessage() {
      if (!this.email && this.emailTouched) {
        return 'Please enter your email'
      }
      if (this.email && this.emailTouched && !this.isEmailValid(this.email)) {
        return 'Please enter CORRECT email'
      }
      return ''
    },
  },
  methods: {
    isEmailValid(input) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input)
    },
    hasOneDigit(input) {
      return /\d/.test(input)
    },
    hasOneLetter(input) {
      return /[a-zA-Z]/.test(input)
    },
    isLongEnough(input) {
      return input.length >= 8
    },
    isPasswordValid(input) {
      return this.password !== '' &&
        this.passwordTouched === true &&
        this.hasOneDigit(input) &&
        this.hasOneLetter(input) &&
        this.isLongEnough(input)
    },
    isFormValid() {
      return this.isEmailValid(this.email) && this.isPasswordValid(this.password)
    },
    allTouched() {
      this.emailTouched = true;
      this.passwordTouched = true;
    },
    handleSubmit(e) {
      e.preventDefault();
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
          :isValid="passwordTouched ? isPasswordValid(password) : true"
        />
        <div class="reg-step-one__password--validation-messages">
          <ValidationMessage
            :class="isLongEnough(password) ?
            'valid' : passwordTouched ? 'not-valid' : null"
          >
            At least 8 characters
          </ValidationMessage>
          <ValidationMessage
            :class="hasOneLetter(password) ?
            'valid' : passwordTouched ? 'not-valid' : null"
          >
            At least one letter
          </ValidationMessage>
          <ValidationMessage
            :class="hasOneDigit(password) ?
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
            @click="handleSubmit"
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
