<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
	padding: 0.8em 1.3em;
	background-color: var(--main-color);
	border: none;
	outline: none;
	border-radius: 4px;
	cursor: pointer;
	transition:
		background-color 0.2s,
		box-shadow 0.2s;
}

.button:hover,
.button:focus-visible {
	background-color: color-mix(in srgb, var(--main-color), black 20%);
}
.button:active {
	background-color: color-mix(in srgb, var(--main-color), black 40%);
}

.button:focus-visible {
	outline: var(--text-color) 2px solid;
}

.button:disabled {
	background-color: color-mix(in srgb, var(--main-color), rgb(87, 87, 87) 90%);
	opacity: 0.5;
	cursor: default;
}
</style>
