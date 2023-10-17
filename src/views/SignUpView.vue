<template>
	<div class="signup-page">
		<LogoText class="logo" />
		<div class="signup-box">
			<div class="signup-header">
				<h2>Sign Up</h2>
				<router-link to="login" class="text-color">Log In</router-link>
			</div>
			<form @submit.prevent="handleSignUp" class="signup-form">
				<BaseInputTextField
					id="email"
					v-model="email"
					type="email"
					placeholder="Your Email"
					:error="hasError"
					:supporting-text="errors?.message"
				/>
				<BaseInputTextField
					id="password"
					v-model="password"
					type="password"
					placeholder="Password"
					:error="hasError"
				/>
				<BaseButton id="signup-submit">Sign Up</BaseButton>
			</form>
			<div class="signup-seperator">
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
import { computed, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import BaseButton from '../components/BaseButton.vue'
import LogoText from '../components/LogoText.vue'
import BaseInputTextField from '../components/BaseInputTextField.vue'
import DiscordLoginButton from '../components/DiscordLoginButton.vue'

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

async function handleSignUp() {
	const { data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value
	})
	if (error == null) {
		errors.value = null
		const path = route.query.redirect as string | null | undefined
		router.replace({ path: path ? path : '/' })
	} else {
		errors.value = error
	}
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
	background-color: var(--background-shade-20);
	width: 350px;
	padding: 28px 32px;
	margin-top: 12px;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
}

.signup-form {
	background-color: inherit;
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

#signup-submit {
	margin-top: 12px;
	width: 250px;
}

.signup-seperator {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 6px;
	margin-bottom: 6px;
	opacity: 0.5;
}

.signup-seperator div {
	/* display: inline-block; */
	/* width: auto; */
	flex-grow: 0.5;
	border-top: 1px solid var(--font-color);
	margin-left: 4px;
	margin-right: 4px;
}

.signup-seperator span {
	padding-left: 4px;
	padding-right: 4px;
}

.social-logins {
	align-self: center;
}
</style>
