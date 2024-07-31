<script setup lang="ts">
import KeyBoardHacker from './KeyBoardHacker'
import Back from './Back.vue'
import Difficulty from './Difficulty.vue'
</script>

<template>
  <q-layout class="keyboard-screen">
    <q-layout v-if="KeyBoardHacker.state.value === 0" class="keyboard-screen-difficulty">
      <Difficulty :difficulty="1">
        <template #button>
          <q-btn>Easy</q-btn>
        </template>
      </Difficulty>
    </q-layout>
    <Back/>
  </q-layout>
</template>

<style scoped>
  .keyboard-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #768ce4;
  }
  .keyboard-screen-difficulty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>