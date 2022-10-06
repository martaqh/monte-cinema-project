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
    },
    type: {
      type: String,
      default: 'text'
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      passwordChangingType: 'password',
      eyeClicked: false,
    }
  },
  emits: ['update:modelValue', 'blur'],
  computed: {
    inputType() {
      return this.type === 'password' ? this.passwordChangingType : this.type
    }
  },
  methods: {
    toggleVisibility() {
      this.passwordChangingType === 'password'
        ? this.passwordChangingType = 'text'
        : this.passwordChangingType = 'password'
      this.eyeClicked = !this.eyeClicked
    }
  }
});
</script>

<template>
  <div class="app-input">
    <AppLabel>{{ label }}</AppLabel>
    <input class="app-input__field"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      :isValid="isValid"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
    />
    <button
      v-if="type === 'password'"
      type="button"
      class="app-input__visibility-toggle"
      @click="toggleVisibility()"
    >
      <img
        v-if="passwordChangingType === 'password'"
        class="app-input__visibility-toggle--icon"
        src='@/assets/PasswordEye.svg'
        :clicked="!eyeClicked"
      />
      <img
        v-if="passwordChangingType === 'text'"
        class="app-input__visibility-toggle--icon"
        src='@/assets/PasswordEyeOff.svg'
        :clicked="eyeClicked"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.app-input {
  position: relative;
  margin-top: 24px;
}
.app-input__field {
  padding: 17px 0;
  gap: 10px;
  background: $color-field-background;
  border-radius: 8px;
  border: none;
  height: fit-content;
  font-size: 18px;
  width: 100%;
  text-indent: 24px;

  &:hover {
    outline: 5px solid $color-hover-border;
  }

  &::placeholder {
    font-size: 16px;
    color: $color-text-light;
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }

  &[type="date"] {
    text-indent: 12px;
    font-family: $font-main;
  }

  &[isValid="false"] {
    border: solid $color-brand;
  }
}

.app-input__visibility-toggle {
  position: absolute;
  left: 85%;
  top: 48%;
  border: none;
  background-color: inherit;
  cursor: pointer;

  &--icon {
    visibility: hidden;

    &[clicked="true"] {
      visibility: visible;
    }
  }
}
</style>
