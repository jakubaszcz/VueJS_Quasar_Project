<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { currentLetter, nextLetter, randomLetters, handleKeyDown, state, streak, highStreak ,restartGame } from './AlphaGame'
import Back from './Back.vue'

onMounted(() => {
  state.value = 2;
  randomLetters();
});

onUnmounted(() => {
  state.value = 3;
})

window.addEventListener("keydown", handleKeyDown);
</script>

<template>
  <q-layout class="alpha-screen">
    <q-layout class="streak-box">
      <q-toolbar-title class="streak">You streak is {{streak}}, you're best is {{highStreak}}</q-toolbar-title>
    </q-layout>
    <q-btn v-if="state === 1" @click="restartGame" class="restart">Restart</q-btn>
    <q-toolbar-title class="question">Next letter of <span class="question-mark">{{ currentLetter }}</span> is ..?</q-toolbar-title>
    <q-layout class="tips-layout">
      <q-toolbar-title class="tips">Use your keyboard</q-toolbar-title>
    </q-layout>
    <q-layout class="answer-box" v-if="state === 1">
      <q-toolbar-title class="answer">{{nextLetter}} was the good guess.</q-toolbar-title>
    </q-layout>
    <Back/>
  </q-layout>
</template>

<style scoped>
.alpha-screen {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #87CEEB;
}
.question {
  text-transform: uppercase;
  font-size: 5vw;
  color: white;
}
.question-mark {
  color: #4f9ebd;
}
.tips-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4f9ebd;
  height: 5vh;
  width: 15vw;
  border-radius: 1vh;
}
.tips, .answer {
  color: white;
}

.answer-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bd4f7d;
  height: 5vh;
  width: 20vw;
  border-radius: 1vh;
  margin-top: 10px;
}

.streak-box {
  top: 5vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 20vw;
  background-color: #4f93bd;
  border-radius: 1vh;
}

.streak {
  color: white;
}

.restart {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 20vh;
  width: 10vw;
  background-color: #88bd4f;
  top: 15vh;
  border-radius: 100vh;
  color: white;
}

</style>
