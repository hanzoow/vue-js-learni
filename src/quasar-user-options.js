import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {},
  extras: [
    'material-icons',
    'mdi-v7',
    'ionicons-v4', // last webfont was available in v4.6.3
    'eva-icons',
    'fontawesome-v6',
    'themify',
    'line-awesome',
    'bootstrap-icons'
  ]
}
