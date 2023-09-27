<template>
	<button class="button" :class="{ 'icon-button': props.icon != null }">
		<span class="wrapper">
			<span
				v-if="props.icon != null"
				class="material-symbols-outlined"
				:class="{ right: props.position == 'right' }"
			>
				{{ props.icon }}
			</span>
			<slot></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		icon?: string
		position?: 'left' | 'right'
	}>(),
	{
		position: 'left'
	}
)
</script>

<style scope>
.button {
	height: 45px;
	min-width: 70px;
	padding: 12px 22px;
	color: inherit;
	font-size: 18px;
	font-weight: 500;
	background-color: var(--main-color);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	outline: 2px solid color-mix(in srgb, var(--main-tint-50) 0%, transparent);
	transition:
		background-color 0.3s ease,
		box-shadow 0.3s ease,
		outline 0.3s ease;
}

.icon-button {
	padding: 10.5px 18px;
}

.button:hover:enabled,
.button:focus-visible {
	background-color: var(--main-shade-30);
	box-shadow: 0px 4px 6px 0px color-mix(in srgb, var(--main-shade-90) 20%, transparent);
}

.button:focus-visible {
	outline: 2px solid var(--main-tint-50);
}

.button:active:enabled {
	background-color: var(--main-shade-50);
	box-shadow: 0px 6px 6px 0px color-mix(in srgb, var(--main-shade-90) 30%, transparent);
}

.button:disabled {
	cursor: not-allowed;
	background-color: color-mix(in srgb, var(--main-tint-10) 40%, transparent);
}

.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 8px;
}

.right {
	flex-direction: row-reverse;
}

/* .button:focus {
	outline: 2px solid var(--highlight-color-80);
} */
</style>
