<template>
	<RouterView />
</template>

<script setup lang="ts">
import { inject, onMounted, type Ref } from 'vue'
import { RouterView } from 'vue-router'

import type { Session } from '@supabase/supabase-js'
import { SESSION } from './keys'
import { supabase } from './supabase'

const session = inject(SESSION) as Ref<Session | null>

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
