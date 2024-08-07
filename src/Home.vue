<template>
  <q-layout class="home">
    <q-toolbar-title class="text">Choose a game...</q-toolbar-title>
    <q-toolbar class="toolbar">
      <router-link to="/AlphaGame" class="router">Alphabetic Game</router-link>
      <router-link to="/ButtonGame" class="router">Button Game</router-link>
      <router-link to="/KeyBoardHacker" class="router">KeyBoard Hacker Game</router-link>
      <router-link to="/AlphaTime" class="router">Alpha Time</router-link>
    </q-toolbar>
  </q-layout>
</template>

<script setup>
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #e4c576;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text {
  position: absolute;
  top: 20%;
  font-size: 5vh;
  color: #8a743b;
}
.router {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 5vh;
  height: 5vh;
  width: 30vh;
  border-radius: 1vh;
  text-transform: none;
  text-decoration: none;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  transition: 0.3s ease;
}
.router:hover {
  font-size: 1.2vw;
  height: 6vh;
  width: 31vh;
}

@media (min-width: 800px) {
}
.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #e4c576;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text {
  position: absolute;
  top: 20%;
  font-size: 5vh;
  color: #8a743b;
}
.router {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 5vh;
  height: 5vh;
  width: 30vh;
  border-radius: 1vh;
  text-transform: none;
  text-decoration: none;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  transition: 0.3s ease;
}
.router:hover {
  font-size: 1.2vw;
  height: 6vh;
  width: 31vh;

}
</style>
