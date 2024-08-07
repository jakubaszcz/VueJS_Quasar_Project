// AlphaTime.ts
import { ref } from 'vue';

const time = ref(0);
const text = ref('');

function getUTCTime(): string {
  const text = "00 cen 00 dec 00 years 00 days 00 hours 00 minutes";
  return text;
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
      time.value -= text.value.charAt(text.value.length - 1).charCodeAt(0);
 } else {
    text.value += event.key;
    time.value += event.key.charCodeAt(0);
  }
  console.log(time.value);
}

document.addEventListener('keydown', handleKeyDown);

export default { getUTCTime, text, handleKeyDown };
