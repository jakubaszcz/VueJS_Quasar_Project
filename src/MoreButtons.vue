<!-- MoreButtons.vue -->
<template>
  <q-btn :class="props.type" @click="Counter.onClick(props.price)">
    <slot name="button"></slot>
  </q-btn>
</template>

<script setup lang="ts">
import Counter from './Counter'; // Assurez-vous que le chemin est correct
import { defineProps } from 'vue';

const props = defineProps<{
  type: string;
  price: number;
}>();
</script>

<style scoped>
q-btn {
  margin: 10px;
}
.modern {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 10vw;
  border: none;
  border-radius: 1vh;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.3s ease, border-radius 0.3s ease, height 0.5s ease;
}

.modern:hover {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0;
  height: 7vh;
}
.modern:active {
  border: solid 1px black;
}

.old {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 10vw;
  border: solid 1px black;
  background-color: #f4f4f4;
  transition: 0.3s ease;
}
.old:active {
  background-color: #dfdede;
}
.ufo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 10vw;
  background-color: #9fee98;
  border: none;
  border-radius: 1vh 2vh 0.5vh 3vh;
  color: #4c4c67;
  transition: 0.3s ease;
}
.ufo:hover {
  background-color: #85bda2;
  height: 15vh;
  width: 7.5vw;
  border-radius: 100vw;
}
.ufo:active {
  background-color: #689c83;
  height: 16vh;
  width: 8vw;
}
.crazy {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 10vw;
  border: none;
  background: #e4c576;
  transition: 0.3s ease;
}
.crazy:hover {
  border-radius: 2vh 1vh 3vh 0.5vh;
  height: 10vh;
  width: 5vw;
}

.crazy:active {
  font-size: 2vw;
  border-radius: 0.5vh 1vh 1vh 5vh;
  height: 12vh;
  width: 9vw;
}
</style>
