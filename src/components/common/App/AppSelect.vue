<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    options: {
      type: Array,
    },
    optionDefault: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      optionSelected: '',
    }
  }
});
</script>

<template>
  <div class="select__wrapper">
    <label class="select__label">{{labelText}}</label>
    <select class="select" v-model="optionSelected">
      <option selected>{{ optionDefault }}</option>
      <option v-for="option of options" :key="option" :placeholder="optionDefault">{{ option }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.select__wrapper {
  margin-top: 40px;
}
.select {
  padding: 17px 24px;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  height: fit-content;
  font-size: 18px;
  width: 100%;
  height: 56px;
}

.select__label {
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
