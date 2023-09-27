<template>
	<BaseButton class="discord-btn" @click="signInWithDiscord">
		<img src="../assets/discord_logo_white.svg" />
		<span>Log In with Discord</span>
	</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { supabase } from '../supabase'
import { BASE_URL } from '../consts'

const props = withDefaults(
	defineProps<{
		redirect?: string
	}>(),
	{
		redirect: ''
	}
)

async function signInWithDiscord() {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			redirectTo: BASE_URL + props.redirect
		}
	})
	console.log(data, error)
}
</script>

<style scoped>
.discord-btn {
	/* display: flex; */
	background-color: #5865f2;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 250px;
	padding-left: 4px;
	padding-right: 4px;
}

.discord-btn:hover {
	/* display: flex; */
	background-color: #2f378a;
	border: none;
}

.discord-btn img {
	width: 36px;
	margin: 6px 12px 6px 12px;
}

.discord-btn span {
	font-size: 16px;
	margin-right: 12px;
	font-weight: 500;
}
</style>
