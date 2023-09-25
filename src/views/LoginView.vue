<template>
	<div class="login-page">
		<LogoText class="logo" />
		<div class="login-box">
			<div class="login-header">
				<h2>Log In</h2>
				<router-link to="signup" class="text-color">Sign up</router-link>
			</div>
			<form @submit.prevent="handleSignIn" class="login-form">
				<label for="login-email">E-Mail</label>
				<input v-model="email" id="login-email" type="email" placeholder="E-Mail" />
				<label for="login-password">Password</label>
				<input v-model="password" id="login-password" type="password" placeholder="Password" />
				<BaseButton id="login-submit">Log In</BaseButton>
			</form>
			<div class="login-seperator">
				<div></div>
				<span>or</span>
				<div></div>
			</div>
			<div class="social-logins">
				<BaseButton @click="signInWithDiscord">
					<img src="../assets/discord_logo_white.svg" />
					<span>Log In with Discord</span>
				</BaseButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Session } from '@supabase/supabase-js'
import type { Ref } from 'vue'
import { inject, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import BaseButton from '../components/BaseButton.vue'
import LogoText from '../components/LogoText.vue'

import { SESSION } from '../keys'
import { supabase } from '../supabase'

const router = useRouter()
const route = useRoute()

const session = inject(SESSION) as Ref<Session | null>
const email = ref('')
const password = ref('')

async function handleSignIn() {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error == null) {
		console.log(typeof route.query.redirect)
		const path = route.query.redirect as string | null | undefined
		router.replace({ path: path ? path : '/' })
	}
}

async function signInWithDiscord() {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'discord'
	})
	console.log(data, error)
}
</script>

<style scoped>
.login-page {
	margin-top: 24px;
	display: grid;
	place-items: center;
}

.login-header {
	margin-bottom: 12px;
}

.login-box {
	background-color: rgba(0, 0, 0, 0.2);
	padding: 24px 36px 24px 36px;
	margin-top: 12px;
	border-radius: 6px;
}

.login-form {
	display: flex;
	flex-direction: column;
}

.login-form input:is([type='email'], [type='password']) {
	color: inherit;
	font-size: 16px;
	background-color: var(--background-color-darker);
	border: 2px solid rgb(25, 23, 25);
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 6px;
	transition: border 0.2s ease;
}

.login-form input:is([type='email'], [type='password']):focus {
	outline: 2px solid var(--primary-color);
}

#login-submit {
	margin-top: 12px;
}

.login-seperator {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 6px;
	margin-bottom: 6px;
}

.login-seperator div {
	/* display: inline-block; */
	/* width: auto; */
	flex-grow: 0.5;
	border-top: 1px solid var(--text-color);
	margin-left: 4px;
	margin-right: 4px;
}

.login-seperator span {
	padding-left: 4px;
	padding-right: 4px;
}

.social-logins button {
	/* display: flex; */
	background-color: #5865f2;
	border: none;
	display: flex;
	align-items: center;
	border-radius: 6px;
	margin: 0;
	height: 45px;
	padding-top: auto;
	padding-bottom: auto;
	padding-left: 4px;
	padding-right: 4px;
}

.social-logins button:hover {
	/* display: flex; */
	background-color: #2f378a;
	border: none;
}

.social-logins button img {
	width: 36px;
	margin: 6px 12px 6px 12px;
}

.social-logins button span {
	font-size: 16px;
	margin-right: 12px;
	font-weight: 500;
}
</style>
