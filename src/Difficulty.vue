<script setup lang="ts">
  defineProps<{
    type: string,
    difficulty: number;
  }>()
</script>

<template>
  <q-layout :class="difficulty" :type="type">
    <q-btn>
      <slot name="button"></slot>
    </q-btn>
  </q-layout>
</template>

<style scoped>

</style>