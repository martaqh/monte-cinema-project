<script>
import { defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default defineComponent({
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  }
})
</script>

<template>
  <Datepicker
    v-model="date"
    class="date-picker"
  />
</template>

<style lang="scss" scoped>
@import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';

.date-picker {
  width: 100%;
}

</style>
