<template>
  <div class="back">
      <router-link to="/" class="router">Home Screen</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .back {
    position: absolute;
    top: 80%;
  }
  .router {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 5vh;
    height: 5vh;
    width: 25vh;
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
    width: 26vh;
  }
</style>
