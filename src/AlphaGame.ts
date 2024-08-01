import { ref } from 'vue'

const letters: string[] = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const currentLetter = ref<string | null>(null);
const nextLetter = ref<string | null>(null);
const keyPressed = ref<string | null>(null)
const state = ref(0);
// 0 no game
// 1 is game
// 2 is on page
// 3 is not on page
const streak = ref(0);
const highStreak = ref(0);
// 0 for win
// 1 for lose

function randomLetters(): void {
  const random = Math.floor(Math.random() * letters.length);
  if (random === 25) {
    nextLetter.value = 'a';
  } else {
    nextLetter.value = letters[random + 1];
  }
  currentLetter.value = letters[random];
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (state.value === 3)
    return;
  if (state.value === 2) {
    state.value = 1;
  }
  keyPressed.value = event.key;
  checkLetter();
}

function restartGame() {
  state.value = 0;
  randomLetters();
  streak.value = 0;
}

function checkLetter() {
  if (keyPressed.value !== nextLetter.value) {
    state.value = 1;
    if (streak.value > highStreak.value) {
      highStreak.value = streak.value;
    }
  } else {
    state.value = 0;
    randomLetters();
    streak.value++;
    if (streak.value > highStreak.value) {
      highStreak.value++;
    }
    console.log(currentLetter);
  }
}

export { currentLetter, randomLetters, nextLetter, handleKeyDown, state, streak, highStreak ,restartGame};
