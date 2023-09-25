<template>
	<div class="signup-page">
		<LogoText class="logo" />
		<div class="signup-box">
			<div class="signup-header">
				<h2>Sign up</h2>
				<router-link to="login" class="text-color">Log in</router-link>
			</div>
			<form @submit.prevent="handleSignUp" class="signup-form">
				<label for="signup-email">E-Mail</label>
				<input v-model="email" id="signup-email" type="email" placeholder="E-Mail" />
				<label for="signup-password">Password</label>
				<input v-model="password" id="signup-password" type="password" placeholder="Password" />
				<BaseButton id="signup-submit">Sign up</BaseButton>
			</form>
			<div class="signup-seperator">
				<div></div>
				<span>or</span>
				<div></div>
			</div>
			<div class="social-signups">
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
import { useRoute, useRouter } from 'vue-router'

import BaseButton from '../components/BaseButton.vue'
import LogoText from '../components/LogoText.vue'

import { SESSION } from '../keys'
import { supabase } from '../supabase'

const router = useRouter()
const route = useRoute()

const session = inject(SESSION) as Ref<Session | null>
const email = ref('')
const password = ref('')

async function handleSignUp() {
	const { data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value
	})
	if (error == null) {
		const path = route.query.redirect as string | null | undefined
		router.replace({ path: path ? path : '/' })
	} else {
		console.error(error)
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
.signup-page {
	margin-top: 24px;
	display: grid;
	place-items: center;
}

.signup-header {
	margin-bottom: 12px;
}

.signup-box {
	background-color: rgba(0, 0, 0, 0.2);
	padding: 24px 36px 24px 36px;
	margin-top: 12px;
	border-radius: 6px;
}

.signup-form {
	display: flex;
	flex-direction: column;
}

.signup-form input:is([type='email'], [type='password']) {
	color: inherit;
	font-size: 16px;
	background-color: var(--background-color-darker);
	border: 2px solid rgb(25, 23, 25);
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 6px;
	transition: border 0.2s ease;
}

.signup-form input:is([type='email'], [type='password']):focus {
	outline: 2px solid var(--primary-color);
}

#signup-submit {
	margin-top: 12px;
}

.signup-seperator {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 6px;
	margin-bottom: 6px;
}

.signup-seperator div {
	/* display: inline-block; */
	/* width: auto; */
	flex-grow: 0.5;
	border-top: 1px solid var(--text-color);
	margin-left: 4px;
	margin-right: 4px;
}

.signup-seperator span {
	padding-left: 4px;
	padding-right: 4px;
}

.social-signups button {
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

.social-signups button:hover {
	/* display: flex; */
	background-color: #2f378a;
	border: none;
}

.social-signups button img {
	width: 36px;
	margin: 6px 12px 6px 12px;
}

.social-signups button span {
	font-size: 16px;
	margin-right: 12px;
	font-weight: 500;
}
</style>
