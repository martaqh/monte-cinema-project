<script lang="ts" setup>
const props = defineProps({
  seatsSelected: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div>
    <p>{{ props.seatsSelected}}</p>
  </div>
</template>
