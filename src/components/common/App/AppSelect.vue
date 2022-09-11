<script>
import { defineComponent } from 'vue';
import AppLabel from '@/components/common/App/AppLabel.vue';

export default defineComponent({
  components: { AppLabel },
  props: {
    label: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    optionStart: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],

});
</script>

<template>
  <div class="app-select">
    <AppLabel>{{ label }}</AppLabel>
    <select
      class="app-select__field"
      :placeholder="placeholder"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option selected>{{optionStart}}</option>
      <option v-for="option of options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.app-select {
  margin-top: 40px;
}
.app-select__field {
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
</style>
