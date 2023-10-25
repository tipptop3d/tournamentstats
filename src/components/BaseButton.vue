<template>
	<button type="button" class="button">
		<slot></slot>
	</button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
	--button-color: var(--main-color);
	--shadow-color: color-mix(in srgb, var(--button-color), black 90%);
	height: 45px;
	min-width: 70px;
	padding: 12px 22px;
	color: inherit;
	font-size: 1.1rem;
	font-weight: 500;
	background-color: var(--button-color);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition:
		background-color 0.3s ease,
		box-shadow 0.3s ease;
}

.icon-button {
	padding: 10.5px 18px;
}

.button:hover:enabled,
.button:focus-visible {
	background-color: color-mix(in srgb, var(--button-color), black 30%);
	box-shadow: 0px 4px 6px 0px color-mix(in srgb, var(--shadow-color) 40%, transparent);
}

.button:focus-visible {
	outline: 2px solid color-mix(in srgb, var(--button-color), white 50%);
}

.button:active:enabled {
	background-color: color-mix(in srgb, var(--button-color), black 50%);
	box-shadow: 0px 6px 6px 0px color-mix(in srgb, var(--shadow-color) 30%, transparent);
}

.button:disabled {
	cursor: not-allowed;
	background-color: color-mix(in srgb, var(--button-color) 30%, #303030);
}
</style>
