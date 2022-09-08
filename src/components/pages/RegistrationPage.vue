<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';
import TheHeader from '@/components/views/TheHeader.vue';
import RegStepOne from '@/components/features/Registration/RegStepOne.vue'
import RegStepTwo from '@/components/features/Registration/RegStepTwo.vue'
import { registerNewUser } from '@/api/service/User'


export default defineComponent({
  components: {
    TheContainer,
    TheHeader,
    RegStepOne,
    RegStepTwo
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
        await registerNewUser({
          email:this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          date_of_birth: this.birthDate
        })
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
   <TheContainer>
      <TheHeader>
        <p>developed with love</p>
      </TheHeader>
    </TheContainer>
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
