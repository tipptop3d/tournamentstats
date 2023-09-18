<template>
	<div class="logo">
		<span class="tournament">Tournament</span>
		<span class="stats">Stats</span>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo {
	line-height: 1;
	font-family: 'Bebas Neue', sans-serif;
	cursor: default;
	user-select: none;
	white-space: nowrap;
}

.logo>span {
	display: inline-block;
}

.tournament {
	font-size: 72px;
}

.stats {
	font-size: 82px;
	color: var(--primary-color);
}
</style>