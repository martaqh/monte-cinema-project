<script lang="ts" setup>

const props = defineProps<{
  seatsSelected: string[];
}>();

</script>

<template>
  <div>
    <p>{{ props.seatsSelected}}</p>
  </div>
</template>
