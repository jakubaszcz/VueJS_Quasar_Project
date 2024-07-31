import { ref } from 'vue'
import MoreButtons from './MoreButtons.vue'

const count = ref(0);

function onClick(num: number) {
  count.value += num;
}

export default {count, onClick}