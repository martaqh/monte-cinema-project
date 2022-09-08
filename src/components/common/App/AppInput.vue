<script>
import { defineComponent } from 'vue';
import AppLabel from '@/components/common/App/AppLabel.vue';

export default defineComponent({
  components: { AppLabel },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    }
  },
  emits: ['update:modelValue', 'blur'],
});
</script>

<template>
  <div class="app-input">
    <AppLabel>{{ label }}</AppLabel>
    <input class="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  padding: 17px 0;
  margin-bottom: 24px;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  height: fit-content;
  font-size: 18px;
  width: 100%;
  text-indent: 24px;

  &::placeholder {
    font-size: 16px;
    color: $color-text-light;
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
}
</style>
