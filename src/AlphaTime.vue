<!-- YourComponent.vue -->
<script setup lang="ts">
import AlphaTime from './AlpaTime';
import Back from './Back.vue';
</script>

<template>
  <q-layout class="alphatime-screen">
    <q-layout class="alphatime-time-board">
      <q-toolbar-title class="alphatime-board-title">{{ AlphaTime.getUTCTime() }}</q-toolbar-title>
    </q-layout>
    <q-layout class="alphatime-input-board">
      <q-toolbar-title class="alphatime-input-title">{{ AlphaTime.text }}</q-toolbar-title>
    </q-layout>
    <Back/>
  </q-layout>
</template>

<style scoped>
.alphatime-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e476c9;
}
.alphatime-time-board {
  border-radius: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 80vw;
  background-color: #e476ad;
  position: absolute;
  top: 15%;
}

.alphatime-board-title {
  font-size: 2em;
  color: white;
}

.alphatime-input-board {
  border-radius: 1vh;
  height: 50vh;
  width: 80vw;
  background-color: #e49d76;
  position: absolute;
  top: 30%;
}

.alphatime-input-title {
  padding: 20px;
  font-size: 2em;
  color: white;
}
</style>
