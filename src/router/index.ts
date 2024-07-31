import { createRouter, createWebHistory } from 'vue-router'
import ButtonGame from './../ButtonGame.vue'
import Home from './../Home.vue'
import AlphaGame from './../AlphaGame.vue'
import KeyboardHacker from './../KeyboardHacker.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/ButtonGame', component: ButtonGame},
  {path: '/AlphaGame', component: AlphaGame},
  {path: '/KeyBoardHacker', component: KeyboardHacker},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router