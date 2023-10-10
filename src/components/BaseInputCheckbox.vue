<template>
	<div>
		<label :for="id" class="label">
			<input :id="id" type="checkbox" class="checkbox material-symbols-outlined" />
			<slot></slot>
		</label>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ id: string }>(), {})
</script>

<style scoped>
.checkbox {
	appearance: none;
	position: relative;
	width: 22px;
	height: 22px;
	border-radius: 4px;
	background: var(--background-shade-40);
	/* border: 1px solid gray; */
	/* Adjusts the position of the checkboxes on the text baseline */
	vertical-align: -6px;
	/* Set here so that Windows' High-Contrast Mode can override */
	color: var(--font-color);
	margin-right: 8px;
}

.checkbox::before {
	content: 'check';
	position: absolute;
	left: 0;
	top: 0;
	font-size: 22px;
	background-color: transparent;
	transform: scale(0);
	transition: 0.2s ease-in-out;
	transition-property: background-color, transform;
	border-radius: 4px;
}

.checkbox:checked::before {
	background-color: var(--main-color);
	transform: scale(1);
}

.checkbox:disabled {
	border-color: black;
	background: #ddd;
	color: rgb(75, 29, 29);
}
</style>
