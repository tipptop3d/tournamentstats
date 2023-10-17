<template>
	<router-link to="/">
		<div class="logo">
			<span class="tournament">Tournament</span>
			<span class="stats">Stats</span>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.logo {
	line-height: 1;
	font-family: 'Bebas Neue', sans-serif;
	user-select: none;
	white-space: nowrap;
	-webkit-user-drag: none;
}

.logo:link,
.logo:visited {
	color: var(--text-color);
	text-decoration: none;
}

.logo > span {
	display: inline-block;
}

.tournament {
	font-size: 72px;
}

.stats {
	font-size: 82px;
	color: var(--main-color);
}
</style>
