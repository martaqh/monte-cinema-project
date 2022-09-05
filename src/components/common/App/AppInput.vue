<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    placeholder: {
      type: String,
      required: true,
    },

  },
  data() {
    return {
      inputContent: '',
    }
  }

});
</script>

<template>
    <input class="input"
      :placeholder="placeholder"
      v-model="inputContent"
    />
</template>

<style lang="scss" scoped>
.input__wrapper {
  margin-top: 40px;
}

.input {
  padding: 17px 24px;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  height: fit-content;
  font-size: 18px;
  width: 100%;
}

.input__label {
    display: block;
    font-family: $font-mono;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: $color-text-label;
    margin-bottom: 12px;
    width: fit-content;
}
</style>
