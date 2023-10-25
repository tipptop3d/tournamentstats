<template>
	<div>
		<label :for="id" class="label">
			<input :id="id" type="checkbox" class="checkbox material-symbols-outlined" v-model="value" />
			<slot></slot>
		</label>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ id: string; modelValue: boolean }>(), {})
const emits = defineEmits<{
	'update:modelValue': [boolean]
}>()

const value = computed({
	get() {
		return props.modelValue
	},
	set(value: boolean) {
		emits('update:modelValue', value)
	}
})
</script>

<style scoped>
.checkbox {
	appearance: none;
	position: relative;
	width: 22px;
	height: 22px;
	border-radius: 4px;
	background: var(--background-shade-40);
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
