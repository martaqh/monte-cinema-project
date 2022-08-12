<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      
    }
  },
  
});

</script>

<template>
  <div class="buttonlike-link">
    <a>
      <slot></slot>
    </a>
  </div>
  
</template>

<style lang="scss" scoped>

@import "@/assets/styles/settings.scss";

.buttonlike-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 114px;
    height: 40px;
    border-radius: $radius-button;
  
    
}

.primary {
  background-color: $color-brand;
  color: $color-text-reverse;
}

.secondary {
  background-color: $color-text-main;
}

.tertiary {
  border: none;
  color: $color-brand;
}



</style>