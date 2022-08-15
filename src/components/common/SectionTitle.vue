<script>
import { defineComponent } from 'vue';

export default defineComponent({
  
});

</script>

<template>
  <div class="section-title">
    <p>
        <slot></slot>
    </p>
  </div>
  
</template>

<style lang="scss" scoped>



.section-title {
    font-family: $font-title;
    p {
          margin: 0;
          width: 100%;
    }

       
  
}

.size-80 {
    font-size: 80px;
    font-weight: 600;
font-size: 80px;
line-height: 102%;

letter-spacing: -0.01em;

@media only screen and (max-width: 1024px) {
        font-size: 48px;
    }
}

.movie-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  font-family: $font-main;
}
</style>