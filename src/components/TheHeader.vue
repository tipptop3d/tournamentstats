<template>
	<header class="header">
		<LoginOverlay v-if="showOverlay" @close="hideLoginOverlay" />
		<LogoText class="logo" />
		<ul class="header-elements">
			<li>My Tournaments</li>
			<li @click="showLoginOverlay">Login</li>
		</ul>
	</header>
</template>

<script setup lang="ts">
import LogoText from './LogoText.vue'
import LoginOverlay from './TheHeaderLoginOverlay.vue'
import { ref } from 'vue'

const showOverlay = ref(false)

function showLoginOverlay() {
	showOverlay.value = true
}

function hideLoginOverlay() {
	showOverlay.value = false
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