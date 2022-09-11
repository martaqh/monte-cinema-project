<script>
import { defineComponent } from 'vue';
import TheContainer from '@/components/common/TheContainer.vue';
import TopNavbar from '@/components/features/Header/TopNavbar.vue';
import SignSection from '@/components/features/Header/SignSection.vue';

export default defineComponent({
  components: {
    TheContainer,
    TopNavbar,
    SignSection,
  },
  computed: {
    publicContent() {
      return ['Home', 'Movies', 'Screenings', 'SingleMovie'].includes(this.$route.name);
    },
    authSection() {
      return ['Register', 'Login'].includes(this.$route.name);
    },
  }
})
</script>

<template>
  <TheContainer>
    <div class="header">
      <a href="/">
        <img
        src="@/assets/MonterailLogo.svg"
        class="logo"
        alt="Monterail logo"
        />
      </a>
      <a href="#">
        <img
          src="@/assets/HamburgerMenu.svg"
          class="header__hamburger-menu"
          alt="Hamburger menu"
        />
      </a>
      <p class="header__monte-slogan" v-if="authSection">Developed with ❤️ by Monterail</p>
      <div class="header__navbar" v-if="publicContent">
        <TopNavbar />
        <SignSection />
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
.header {
  height: 112px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__hamburger-menu {
  display: none;

  @include mobile {
    display: block;
  }
}

.header__navbar {
  width: 75%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @include mobile {
    display: none;
  }
}

.header__monte-slogan {
  font-family: $font-mono;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @include mobile {
    display: none;
  }
}
</style>
