<template>
  <q-layout class="button-screen">
    <q-toolbar-title class="score">{{Counter.count.value}}</q-toolbar-title>
    <q-layout v-if="Counter.count.value >= 1000" class="achievement-container">
      <q-toolbar-title v-if="Counter.count.value >= 1000" class="achievement">Congrats, you made it to the 1k</q-toolbar-title>
    </q-layout>
    <MoreButtons :price="1" type="modern">
      <template #button>
        Modern
      </template>
    </MoreButtons>
    <MoreButtons v-if="Counter.count.value >= 10" :price="2" type="old">
      <template #button>
        Old
      </template>
    </MoreButtons>
    <MoreButtons v-if="Counter.count.value >= 30" :price="5" type="ufo">
      <template #button>
        UFO
      </template>
    </MoreButtons>
    <MoreButtons v-if="Counter.count.value >= 200" :price="20" type="crazy">
      <template #button>
        Crazy
      </template>
    </MoreButtons>
    <Back/>
  </q-layout>
</template>
<script setup lang="ts">
import MoreButtons from './MoreButtons.vue'
import Counter from './Counter'
import Back from './Back.vue'
</script>

<style scoped>
* {
  overflow-y: hidden;
}
.score {
  font-size: 5vh;
  color: #1096;
}
.achievement-container {
  margin-left: 5em;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 0;
  height: 10vh;
  width: 25vw;
  background-color: #e48776;
  color: white;
}
.button-screen {
  overflow: hidden;
  background-color: #1092;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>