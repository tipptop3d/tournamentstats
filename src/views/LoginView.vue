<template>
	<div class="login-page">
		<LogoText class="logo" />
		<div class="login-box">
			<div class="login-header">
				<h2>Log In</h2>
				<router-link to="signup" class="text-color">Sign up</router-link>
			</div>
			<form @submit.prevent="handleSignIn" class="login-form">
				<BaseTextField
					id="email"
					v-model="email"
					type="email"
					placeholder="Your Email"
					:error="hasError"
					:supporting-text="errors?.message"
				/>
				<BaseTextField
					id="password"
					v-model="password"
					type="password"
					placeholder="Password"
					:error="hasError"
				/>
				<BaseButton id="login-submit">Log In</BaseButton>
			</form>
			<div class="login-seperator">
				<div></div>
				<span>or</span>
				<div></div>
			</div>
			<div class="social-logins">
				<DiscordLoginButton :redirect="redirectTo"></DiscordLoginButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { AuthError, Session } from '@supabase/supabase-js'
import type { Ref } from 'vue'
import { inject, ref, computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import BaseButton from '../components/BaseButton.vue'
import DiscordLoginButton from '@/components/DiscordLoginButton.vue'
import LogoText from '../components/LogoText.vue'
import BaseTextField from '../components/BaseInputTextField.vue'

import { SESSION } from '../keys'
import { supabase } from '../supabase'

const router = useRouter()
const route = useRoute()

const path = route.query.redirect as string | null
const redirectTo = path ? path : '/'

const session = inject(SESSION) as Ref<Session | null>
const email = ref('')
const password = ref('')

const errors = ref<AuthError | null>(null)
const hasError = computed(() => errors.value != null)

async function handleSignIn() {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error == null) {
		errors.value = null
		const path = route.query.redirect as string | null
		router.replace({ path: redirectTo })
	} else {
		errors.value = error
	}
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
	background-color: var(--background-shade-20);
	width: 350px;
	padding: 28px 32px;
	margin-top: 12px;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
}

.login-form {
	background-color: inherit;
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

#login-submit {
	margin-top: 12px;
	width: 250px;
}

.login-seperator {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 6px;
	margin-bottom: 6px;
	opacity: 0.5;
}

.login-seperator div {
	/* display: inline-block; */
	/* width: auto; */
	flex-grow: 0.5;
	border-top: 1px solid var(--font-color);
	margin-left: 4px;
	margin-right: 4px;
}

.login-seperator span {
	padding-left: 4px;
	padding-right: 4px;
}

.social-logins {
	align-self: center;
}
</style>
