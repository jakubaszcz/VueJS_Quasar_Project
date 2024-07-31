import { useRoute, useRouter } from 'vue-router'

const router = useRouter();

function goToHome() {
  router.push('/');
}

function goToButtonGame() {
  router.push('/ButtonGame');
}

function goToAlphaGame() {
  router.push('/AlphaGame');
}

export default { goToHome, goToButtonGame, goToAlphaGame }