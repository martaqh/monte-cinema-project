<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    labelText: {
      type: String,
      required: true,
    },
    labelLink: {
      type: Object,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
})
</script>

<template>
  <div class="app-checkbox">
    <input
      type="checkbox"
      id="checkbox"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label>
      {{ labelText }}
      <router-link :to="labelLink.to">
        <span>{{ labelLink.text }}</span>
      </router-link>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.app-checkbox {
  margin-top: 24px;
  font-family: $font-main;

  label {
    margin-left: 12px;
  }
}
</style>
