// AlphaTime.ts
import { ref } from 'vue';

const time = ref(0);
const text = ref('');
const multiplier = ref(1);

function getUTCTime(): string {
  const centuries = Math.floor(time.value / (100 * 365 * 24 * 60));
  const decades = Math.floor(time.value / (10 * 365 * 24 * 60)) % 10;
  const years = Math.floor(time.value / (365 * 24 * 60)) % 10;
  const days = Math.floor(time.value / (24 * 60)) % 365;
  const hours = Math.floor(time.value / 60) % 24;
  const minutes = time.value % 60;

  return `${centuries.toString().padStart(2, '0')} cen ${decades.toString().padStart(2, '0')} dec ${years.toString().padStart(2, '0')} years ${days.toString().padStart(2, '0')} days ${hours.toString().padStart(2, '0')} hours ${minutes.toString().padStart(2, '0')} minutes`;
}

function increaseMultiplier() {
  const multiplierList = [1, 2, 5, 10, 100, 1000, 10000];

  multiplier.value = (multiplier.value + 1) % multiplierList.length;
  multiplier.value = multiplierList[multiplier.value];
}

function handleKeyDown(event: KeyboardEvent): void {
  const ignoredKeys = [
    'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight',
    'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight', 'Tab',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'
  ];

  if (ignoredKeys.includes(event.code)) {
    return;
  }

  if (event.key === 'Backspace') {
      text.value = text.value.slice(0, -1);
      time.value -= text.value.charAt(text.value.length - 1).charCodeAt(0) * multiplier.value;
 } else {
    text.value += event.key;
    time.value += event.key.charCodeAt(0) * multiplier.value;
  }
  console.log(time.value);
}

document.addEventListener('keydown', handleKeyDown);

export default { getUTCTime, time, text, handleKeyDown, multiplier, increaseMultiplier};
