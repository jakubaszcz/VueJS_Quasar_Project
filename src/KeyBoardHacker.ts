import { ref } from 'vue'

const timer = ref(0)
const mistake = ref(0);
const score = ref(0);
const text = ref('');
const defaultSize = ref(50);
const size = ref(0);
const keyboardChars: string[] = [
  // Lettres minuscules
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

  // Lettres majuscules
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

  // Chiffres
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

  // Symboles courants
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
  '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.',
  '/', '?',

  // Espaces et autres
  ' ', '\t', '\n'
];

const difficulty = ref(1);
//Diffculty 1 : easy
//Difficulty 2 : medium
//Difficulty 3 : hard

const state = ref(0);
//State 0 : choosing difficulty
//State 1 : ready ?
//State 2 : playing
//State 3 : finish

function generateText() {
  text.value = ''; // Reset text
  const times = Math.floor(defaultSize.value * (2 + (difficulty.value / 10)));
  for (let i = 0; i < times; i++) {
    const randomIndex = Math.floor(Math.random() * keyboardChars.length);
    text.value += keyboardChars[randomIndex];
  }
}

function game() {
  if (state.value === 2) {
    onTimer()
    generateText();
  }
}

function onTimer() {
  const time = setInterval;
  time(() =>{
    timer.value++
  }, 1000)
}

function changeState(num: number) {
  state.value = num;
  game();
}

function onDifficulty(num: number) {
  difficulty.value = num;
  changeState(1);

}

export default { timer, text, mistake, score, state, onDifficulty, changeState }