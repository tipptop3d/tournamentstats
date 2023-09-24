<template>
  <TheHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import { supabase } from './supabase'

import TheHeader from './components/TheHeader.vue'

const session = ref()
provide('session', session)

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((event, _session) => {
    console.log(event, _session)
    session.value = _session
  })
})
</script>
