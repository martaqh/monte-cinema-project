<script>
import { defineComponent } from 'vue';
import AppButton from '@/components/common/App/AppButton.vue';
import TheContainer from '@/components/common/TheContainer.vue';
import SectionSubtitle from '@/components/common/Section/SectionSubtitle.vue';
import TheHeader from '@/components/views/TheHeader.vue';
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';

export default defineComponent({
  components: { AppButton, TheContainer, SectionSubtitle, TheHeader, TopNavbar, SignSection }
});
</script>

<template>
    <div class="not-found">
      <TheHeader>
        <TopNavbar />
        <SignSection />
      </TheHeader>
      <TheContainer>
        <div class="not-found__content">
        <SectionSubtitle size="large">
          Sorry, we haven't found <br/>
          what you were looking for
        </SectionSubtitle>
        <AppButton
          :to="{ name: 'Home' }"
          color-scheme="main"
          size="large"
        >
          Go back to home page
        </AppButton>
      </div>
    </TheContainer>
  </div>
</template>

<style lang="scss" scoped>
.not-found__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 100px;
  text-align: center;
}
</style>
