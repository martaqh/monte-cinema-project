<template>
  <div class="contact-section">
    <div class="contact-details">
      <div class="contact-details__address">
        <div class="contact-details__image-wrapper">
          <img src="@/assets/RedPin.svg" />
        </div>
        <p>
          Monterail Sp. z o.o.<br />
          ul. Oławska 27-29<br />
          50-123 Wrocław<br />
          Poland
        </p>
      </div>
      <div class="contact-details__email">
        <img src="@/assets/RedEnvelope.svg" />
        <p>hello@monterial.com</p>
      </div>
      <div class="contact-details__phone">
        <img src="@/assets/RedPhone.svg" />
        <p>+48 533 600 136</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-section {
  display: flex;

  @include mobile {
    flex-direction: column;
  }
}
.contact-details  {
  margin-top: 48px;
  padding: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
  background-color: $color-field-background;
  font-family: $font-mono;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.015em;
  border-radius: $radius-tag;

  img {
      margin-right: 20px;
    }

  &__image-wrapper {
    display: flex;
    align-items: flex-start;
  }

  &__address, &__email  {
    display: flex;
    margin-bottom: 40px;

  }

  &__phone {
    display: flex;
    margin-bottom: 0;
  }

  @include mobile {
    padding: 33px;
    width: fit-content;
  }

  @include tablet {
    width: 100%;
  }
}

</style>
