<template>
	<header class="header">
		<LogoText class="logo" />
		<ul class="header-elements">
			<li>My Tournaments</li>
			<li v-if="session == null" @click="handleLogIn">Login</li>
			<li v-else @click="handleLogOut">Log Out</li>
		</ul>
	</header>
</template>

<script setup lang="ts">
import type { Session } from '@supabase/supabase-js';
import type { Ref } from 'vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

import LogoText from './LogoText.vue';

import { SESSION } from '../keys';
import { supabase } from '../supabase';

const router = useRouter()
const session = inject(SESSION) as Ref<Session | null>

function handleLogIn() {
	router.push({ name: 'login' })
}

async function handleLogOut() {
	const { error } = await supabase.auth.signOut()
	console.error(error)
}

</script>

<style scoped>
.header {
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 25px;
	padding-right: 40px;
	background: rgba(18, 16, 18, 0.3);
}

.header-elements {
	display: flex;
	align-items: center;
	text-align: center;
	gap: 40px;
	list-style-type: none;
	user-select: none;
}

.header-elements>li {
	font-size: 22px;
	font-weight: 600;
	cursor: pointer;
	text-decoration: underline var(--primary-color-alpha);
	text-underline-offset: 2px;
	transition: text-decoration 0.3s ease, text-underline-offset 0.2s ease;
}

.header-elements>li:hover {
	text-decoration: underline var(--primary-color);
	text-underline-offset: 4px;
}
</style>