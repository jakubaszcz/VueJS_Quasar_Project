import 'quasar/dist/quasar.css'; // Ajoutez cette ligne si ce n'est pas déjà fait
import { Dialog, Notify } from 'quasar';

export default {
  config: {
    brand: {
      primary: '#027be3'
    }
  },
  plugins: {
    Dialog,
    Notify
  }
};
