<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';
import RegStepOne from '@/components/features/Registration/RegStepOne.vue'
import RegStepTwo from '@/components/features/Registration/RegStepTwo.vue'
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  components: {
    TheContainer,
    RegStepOne,
    RegStepTwo
  },
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
  data() {
    return {
      isRequestFinished: false,
      currentStep: 1,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: ''
    }
  },
  methods: {
    procedeToStep2(data) {
      this.email = data.email;
      this.password = data.password;
      this.currentStep = 2
    },
    async submitData(data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.birthDate = data.birthDate;
      try {
        await this.auth.register({
          email:this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          date_of_birth: this.birthDate
        })
        this.$router.push({ name: 'Login' })
      } catch(error) {
        console.error(error)
      } finally {
        this.isRequestFinished = true
      }
    }
  }
})
</script>

<template>
  <div class="registration-page">
    <TheContainer variant="form">
      <RegStepOne
        v-if="currentStep === 1"
        @completed="procedeToStep2"
      />
      <RegStepTwo
        v-if="currentStep === 2"
        @completed="submitData"
      />
    </TheContainer>
  </div>
</template>
