<template>
  <div class="card" :class="rank">
    <h3><slot name="achievment-title"></slot></h3>
    <p><slot name="achievment-text"></slot></p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  rank: string
}>();
</script>

<style scoped>
.card {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

q-toolbar-title {
  font-size: 3vw;
}
.low {
  background-color: red;
}
.medium {
  background-color: orange;
}
.high {
  background-color: green;
}
</style>
