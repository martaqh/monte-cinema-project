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
    TheHeader
  },
  data() {
    return {
      email: '',
      password: ''
    }
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
          label="email"
          placeholder="Something ending with monterail.com"
        />

        <AppInput
          label="password"
          placeholder="Enter your password"
        />

        <ValidationMessage>At least 8 characters</ValidationMessage>
        <ValidationMessage>At least one letter</ValidationMessage>
        <ValidationMessage>At least one digit</ValidationMessage>
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
