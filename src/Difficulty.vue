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
  background-color: #76e495;

}

.medium {
  background-color: #e4d276;

}

.hard {
  background-color: #e476ad;

}

</style>