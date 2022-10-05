<script lang="ts" setup>

const props = defineProps<{
  seatsSelected: Array<string>
}>();

</script>

<template>
  <div>
    <p>{{ props.seatsSelected}}</p>
  </div>
</template>
