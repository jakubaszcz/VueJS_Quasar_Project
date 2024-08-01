<script setup lang="ts">
import KeyBoardHacker from './KeyBoardHacker'
import Back from './Back.vue'
import Difficulty from './Difficulty.vue'
import { onMounted, onUnmounted } from 'vue'
import keyBoardHacker from './KeyBoardHacker'
onMounted(() => {
  KeyBoardHacker.changeState(0);
})
onUnmounted(() => {
  KeyBoardHacker.gameOff();
})
</script>

<template>
  <q-layout class="keyboard-screen">
    <q-layout v-if="KeyBoardHacker.state.value === 0" class="keyboard-screen-difficulty">
      <Difficulty :difficulty="1" type="easy">
        <template #button>
          <q-btn>Easy</q-btn>
        </template>
      </Difficulty>
      <Difficulty :difficulty="2" type="medium">
        <template #button>
          <q-btn>Medium</q-btn>
        </template>
      </Difficulty>
      <Difficulty :difficulty="3" type="hard">
        <template #button>
          <q-btn>Hard</q-btn>
        </template>
      </Difficulty>
    </q-layout>
    <q-layout v-if="KeyBoardHacker.state.value === 1" class="keyboard-screen-ready">
      <q-btn class="ready" @click="KeyBoardHacker.changeState(2)">Ready</q-btn>
    </q-layout>
    <q-layout v-if="KeyBoardHacker.state.value === 2" class="keyboard-screen-game">
      <q-layout class="information-panel">
        <q-layout class="information-box">
          <q-toolbar-title>Score : {{KeyBoardHacker.score.value}}</q-toolbar-title>
        </q-layout>
        <q-layout class="information-box">
          <q-toolbar-title>Timer : {{KeyBoardHacker.timer.value}} secs</q-toolbar-title>
        </q-layout>
        <q-layout class="information-box">
          <q-toolbar-title>Mistake : {{KeyBoardHacker.mistake.value}}</q-toolbar-title>
        </q-layout>
      </q-layout>
      <q-layout class="game-panel">
        <q-toolbar-title class="game-text">
          {{keyBoardHacker.text}}
        </q-toolbar-title>
      </q-layout>
      <q-layout class="game-client">
        <q-toolbar-title class="game-client-keyboard">
          {{KeyBoardHacker.keyPressed.value}}
        </q-toolbar-title>
      </q-layout>
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
  .keyboard-screen-difficulty,
  .keyboard-screen-ready,
  .keyboard-screen-game {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .keyboard-screen-difficulty .medium,
  .keyboard-screen-difficulty .hard {
    margin-top: 10px;
  }
  .information-panel {
    position: absolute;
    top: 5%;
    display: inline-flex;
  }
  .information-box {
    margin: 10px;
    display: flex;
    border-radius: 1vh;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 25vh;
    background-color: #88bd4f;
    color: white;
  }
  .game-panel {
    position: absolute;
    top: 15%;
    display: flex;
    height: 40vh;
    border-radius: 1vh;
    width: 80vw;
    background-color: #4f75bd;
  }
  .game-text {
    margin: 20px;
    font-size: 2em;
    color: white;
  }
  .game-client {
    position: absolute;
    top: 60%;
    height: 20vh;
    width: 20vw;
    background-color: #bd4f7d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1vh;
  }
  .game-client-keyboard {
    color: white;
    font-size: 4em;
  }
  .ready {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 5vh;
    width: 20vw;
    border-radius: 1vh;
    transition: 0.3s ease;
    background-color: #e4c576;
  }
</style>