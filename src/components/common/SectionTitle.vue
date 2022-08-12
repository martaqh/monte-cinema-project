<script>
import { defineComponent } from 'vue';

export default defineComponent({
  
});

</script>

<template>
  <div class="section-title">
    <h2>
        <slot></slot>
    </h2>
  </div>
  
</template>

<style lang="scss" scoped>



.section-title {
    font-family: $font-title;

    h2 {
          margin: 0;
    }
  
}

.size-80 {
    font-size: 60px;
    font-weight: 600;
    line-height: 82px;
    letter-spacing: -0.01em;
}
</style>