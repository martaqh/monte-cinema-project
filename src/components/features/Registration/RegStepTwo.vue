<script>
import { defineComponent } from 'vue';
import AppInput from '@/components/common/App/AppInput.vue';
import FormCard from '@/components/views/FormCard.vue';
import ValidationMessage from '@/components/common/Form/ValidationMessage.vue';
import AppButton from '@/components/common/App/AppButton.vue';
import SectionTitle from '@/components/common/Section/SectionTitle.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import AppCheckbox from '@/components/common/App/AppCheckbox.vue';

export default defineComponent({
  components: {
    AppInput,
    FormCard,
    ValidationMessage,
    AppButton,
    SectionTitle,
    SectionSubtitle,
    AppCheckbox
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      birthDate: '',
      firstNameTouched: false,
      lastNameTouched: false,
      birthDateTouched: false,
      privacyPolicy: false
    }
  },
  emits: ['completed'],
  computed: {
    firstNameErrorMessage() {
      if (this.firstName === '' && this.firstNameTouched) {
        return 'Please enter your first name'
      }
      return ''
    },
    lastNameErrorMessage() {
      if (this.lastName === '' && this.lastNameTouched) {
        return 'Please enter your last name'
      }
      return ''
    },
    birthDateErrorMessage() {
      if (this.birthDate === '' && this.birthDateTouched) {
        return 'Please enter your date of birth'
      }
      return ''
    },
    isBirthDateValid() {
      return !this.birthDateErrorMessage &&
        this.isUserAbove18(this.birthDate)
    }
  },
  methods: {
    isUserAbove18(birthDate) {
      const dateOfBirth = new Date(birthDate);
      const monthDifference = Date.now() - dateOfBirth.getTime();
      const ageInDateFormat = new Date(monthDifference);
      const year = ageInDateFormat.getUTCFullYear();
      const age = Math.abs(year - 1970);
      return age >= 18
    },
    isFormValid() {
      return !this.firstNameErrorMessage &&
        !this.lastNameErrorMessage &&
        this.isBirthDateValid && this.privacyPolicy
    },
    allTouched() {
      this.firstNameTouched = true;
      this.lastNameTouched = true;
      this.birthDateTouched = true;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.allTouched();
      if (!this.privacyPolicy) {
        alert('Please accept our Privacy Policy to continue')
      }
      if (this.isFormValid()) {
        this.$emit('completed', {
          firstName: this.firstName,
          lastName: this.lastName,
          birthDate: this.birthDate
        })
      } else {
        console.error('Data is NOT valid')
      }
    }
  }
});
</script>

<template>
  <div class="reg-step-one">
    <div class="reg-step-two__header">
      <SectionTitle size="large">Great!</SectionTitle>
      <SectionSubtitle size="large">Now your name</SectionSubtitle>
    </div>
    <FormCard>
     <form
        class="step-two"
        @completed="onStep2Completed"
        @submit="handleSubmit"
      >
        <AppInput
          label="first name"
          type="text"
          placeholder="e.g. Jessica"
          v-model="firstName"
          @blur="firstNameTouched = true"
          :is-valid="!firstNameErrorMessage"
        />
          <ValidationMessage
            v-if="firstNameErrorMessage"
            class='not-valid'
          >
          {{ firstNameErrorMessage }}
          </ValidationMessage>
        <AppInput
          label="last name"
          type="text"
          placeholder="e.g. Walton"
          v-model="lastName"
          @blur="lastNameTouched = true"
          :is-valid="!lastNameErrorMessage"
        />
        <ValidationMessage
          v-if="lastNameErrorMessage"
          class='not-valid'
        >
        {{ lastNameErrorMessage }}
        </ValidationMessage>
        <AppInput
          label="date of birth"
          type="date"
          placeholder="DD / MM / YYYY"
          v-model="birthDate"
          @blur="birthDateTouched = true"
          :is-valid="birthDateTouched ? isBirthDateValid : true"
        />
        <ValidationMessage
          :class="isUserAbove18(this.birthDate) ? 'valid' : birthDateTouched ? 'not-valid' : null"
        >
          You should be minimum 18 years old
        </ValidationMessage>
        <AppCheckbox
          labelText="I accept"
          :labelLink="{text: 'Privacy Policy', to: {name: 'Home'}}"
          v-model="privacyPolicy"
        />
        <div class="reg-step-two__buttons">
          <AppButton
            usage="form"
            size="large"
            color-scheme="no-border"
            :to="{name: 'Login'}"
          >
            Log in instead
          </AppButton>
          <AppButton
            usage="form"
            size="large"
            color-scheme="main"
            @click="handleSubmit"
          >
            Register
          </AppButton>
        </div>
      </form>
      </FormCard>
  </div>
</template>

<style lang="scss" scoped>
.reg-step-two__header {
  @include mobile {
    text-align: center;
  }
}

.reg-step-two__buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
    width: 100%;
  }
}

.reg-step-two__validation-message {
  margin-top: 24px;
}
</style>
