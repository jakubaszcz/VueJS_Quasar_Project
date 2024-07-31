import { ref } from 'vue'

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

export default { state }