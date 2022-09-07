<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    }
  },
  emits: ['update:modelValue'],
});
</script>
<template>
  <input class="input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
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
</style>
