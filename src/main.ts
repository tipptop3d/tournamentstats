import './assets/base.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import type { Session } from '@supabase/supabase-js'
import { SESSION } from './keys'

const session = ref<Session | null>(null)

const app = createApp(App)
app.provide(SESSION, session)
app.use(router)

app.mount('#app')
