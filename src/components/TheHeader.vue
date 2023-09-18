<template>
	<header class="header">
		<LogoText class="logo" />
		<ul class="header-elements">
			<li>My Tournaments</li>
			<li>Login</li>
		</ul>
	</header>
</template>

<script setup lang="ts">
import LogoText from './LogoText.vue'
</script>

<style scoped>
.header {
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 25px;
	padding-right: 25px;
	background: rgba(18, 16, 18, 0.3);
}

.logo {
	/* margin-left: 15px; */
}

.header-elements {
	display: flex;
	gap: 30px;
	list-style-type: none;
	user-select: none;
}

.header-elements>li {
	font-size: 26px;
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