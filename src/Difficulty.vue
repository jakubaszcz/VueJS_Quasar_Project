<script setup lang="ts">
import KeyBoardHacker from './KeyBoardHacker'
  const props = defineProps<{
    type: string,
    difficulty: number;
  }>()
</script>

<template>
  <q-layout :class="type" :type="difficulty" @click="KeyBoardHacker.onDifficulty(props.difficulty)">
    <q-btn>
      <slot name="button"></slot>
    </q-btn>
  </q-layout>
</template>

<style scoped>
q-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 5vh;
  width: 20vw;
  border-radius: 1vh;
  transition: 0.3s ease;
}
q-layout:hover {
  height: 6vh;
  width: 21vw;
}
.easy {
  background-color: rgba(0, 153, 89, 1);
}

.medium {
  background-color: rgb(153, 150, 0);
}

.hard {
  background-color: rgb(153, 0, 0);
}

</style>