<script setup lang="ts">
const props = defineProps({
  titleText: String
});
</script>

<template>
  <h2 class="pb-3 text-3xl font-extrabold">{{ props.titleText }}</h2>
</template>
