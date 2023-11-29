<template>
	<div class="wrap">
		<BaseButton>BaseButton</BaseButton>
		<ButtonCTA>ButtonCTA</ButtonCTA>
		<ButtonDelete>ButtonDelete</ButtonDelete>
		<ButtonDiscordLogin>ButtonDiscordLogin</ButtonDiscordLogin>
		<ButtonFilledIcon>ButtonFilledIcon</ButtonFilledIcon>
		<ButtonIconRound>ButtonIconRound</ButtonIconRound>
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import BaseButton from './components/input/buttons/BaseButton.vue'
import ButtonCTA from './components/input/buttons/ButtonCTA.vue'
import ButtonDelete from './components/input/buttons/ButtonDelete.vue'
import ButtonDiscordLogin from './components/input/buttons/ButtonDiscordLogin.vue'
import ButtonFilledIcon from './components/input/buttons/ButtonFilledIcon.vue'
import ButtonIconRound from './components/input/buttons/ButtonIconRound.vue'

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

<style scoped>
.wrap {
	margin: 16px;
}
</style>
