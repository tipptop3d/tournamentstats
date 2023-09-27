<template>
	<TheHeader />
	<div class="view-wrapper">
		<BaseButton class="create-button" @click="handleNewTournament"
			>Create New Tournament</BaseButton
		>
	</div>
</template>

<script setup lang="ts">
import type { Session } from '@supabase/supabase-js'
import type { Ref } from 'vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

import BaseButton from '../components/BaseButton.vue'
import TheHeader from '../components/TheHeader.vue'

import { SESSION } from '../keys'

const session = inject(SESSION) as Ref<Session | null>
const router = useRouter()

function handleNewTournament() {
	router.push({ name: 'create' })
}
</script>

<style scoped>
.view-wrapper {
	flex: 1;
	display: grid;
	place-items: center;
}
</style>
