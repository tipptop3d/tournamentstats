<template>
	<div class="field-group" :class="{ error: props.error }">
		<input id="input" :type="type" class="text-field" placeholder="Your Email" :value="modelValue"
			@input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)">
		<label for="input" class="field-label">Your E-Mail</label>
		<div class="supporting-text">{{ props.modelValue }}</div>
	</div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
	type?: 'text' | 'email' | 'password' | 'tel' | 'url'
	supportingText?: string
	error?: boolean
	modelValue: string
}>(), {
	type: 'text',
	supportingText: '',
	error: false
})

const emits = defineEmits<{
	'update:modelValue': [value: string]
}>()

</script>

<style scoped>
.field-group {
	width: 300px;
	position: relative;
}

.text-field {
	width: 100%;
	height: 56px;
	font-size: 16px;
	color: var(--font-color);
	font-family: inherit;
	padding-left: 16px;
	padding-right: 16px;
	background: transparent;
	outline: 1px solid var(--font-color);
	border: none;
	border-radius: 4px;
	transition: outline 0.2s;
}

.text-field:focus {
	outline: 2px solid var(--main-color);
	/* height: 55px;
	padding-left: 15.5px;
	padding-right: 15.5px; */
}

.text-field::placeholder {
	color: transparent;
}

.text-field~.field-label {
	background-color: var(--background-color);
	cursor: text;
	position: absolute;
	display: block;
	transition: 0.2s;
	padding: 0 4px;
	margin-left: 12px;
	font-size: 12px;
	top: -10px;
	color: var(--font-color);
}

.text-field:placeholder-shown~.field-label {
	top: 16px;
	font-size: 16px;
}

.text-field:focus~.field-label {
	font-size: 12px;
	top: -10px;
	color: var(--main-color);
}

.supporting-text {
	width: calc(100% - 32px);
	font-size: 12px;
	margin-top: 4px;
	margin-right: 16px;
	margin-left: 16px;
	overflow: hidden;
}

.field-group.error {
	color: var(--error-color);
}

.field-group.error .text-field {
	color: var(--error-color);
	outline: 1px solid var(--error-color);
}

.field-group.error .text-field:focus {
	color: var(--error-color);
	outline: 2px solid var(--error-color);
}

.field-group.error .field-label {
	color: var(--error-color);
}

.field-group.error .supporting-text {
	color: var(--error-color);
}
</style>
