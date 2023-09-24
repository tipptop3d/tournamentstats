<template>
	<div class="login-overlay">
		<div class="login-box">
			<div class="symbol close-symbol material-symbols-outlined" @click="$emit('close')">Close</div>
			<div class="login-header">
				<h2>Login</h2>
			</div>
			<div>
				<form @submit.prevent="handleSignIn" class="login-form">
					<label for="login-email">E-Mail</label>
					<input v-model="email" id="login-email" type="email" placeholder="E-Mail">
					<label for="login-password">Password</label>
					<input v-model="password" id="login-password" type="password" placeholder="Password">
					<BaseButton id="login-submit">Log In</BaseButton>
				</form>
				<div class="login-seperator">
					<div></div>
					<span>or</span>
					<div></div>
				</div>
				<div class="social-logins">
					<BaseButton>
						<img src="../assets/discord_logo_white.svg">
						<span>Log In with Discord</span>
					</BaseButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { supabase } from '../supabase'

const emits = defineEmits<{
	close: []
}>()

const email = ref('')
const password = ref('')

async function handleSignIn() {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error != null) {
		console.log(error)
	} else {
		emits('close')
	}
}

</script>

<style scoped>
.login-overlay {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.4);
}

.login-box {
	padding: 16px 24px 36px 24px;
	background: var(--background-color);
	position: relative;
	border-radius: 8px;
}

.login-header h2 {
	margin-bottom: 12px;
}

.symbol {
	background-color: rgba(255, 255, 255, 0);
	transition: background-color 0.3s ease;
	padding: 6px;
	border-radius: 50%;
	cursor: pointer;
}

.symbol:hover {
	background-color: rgba(255, 255, 255, 0.1);
}

.close-symbol {
	position: absolute;
	top: 8px;
	right: 8px;
}

.login-form {
	display: flex;
	flex-direction: column;
}

.login-form input:is([type=email], [type=password]) {
	color: inherit;
	font-size: 16px;
	background-color: var(--background-color-darker);
	border: 2px solid rgb(25, 23, 25);
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 6px;
	transition: border 0.2s ease;
}

.login-form input:is([type=email], [type=password]):focus {
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
	background-color: #5865F2;
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