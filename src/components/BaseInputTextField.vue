<template>
	<div class="field-group" :class="{ error: error, disabled: $attrs['disabled'] }">
		<div class="text-box">
			<input
				class="text-field"
				:id="id"
				:type="type"
				:value="modelValue"
				v-bind="$attrs"
				@input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
			/>
			<label :for="id" class="field-label"> {{ $attrs['placeholder'] }}</label>
			<span v-if="error" class="error-icon material-symbols-outlined error">error</span>
		</div>
		<div class="supporting-text">{{ supportingText }}</div>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false
})

const props = withDefaults(
	defineProps<{
		id: string
		type?: 'text' | 'email' | 'password' | 'tel' | 'url'
		supportingText?: string | null
		error?: boolean
		modelValue: string
	}>(),
	{
		type: 'text',
		supportingText: '',
		error: false
	}
)

const emits = defineEmits<{
	'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.field-group {
	width: 250px;
	margin-top: 8px;
}

.field-group.disabled {
	cursor: not-allowed;
	opacity: 0.5;
}

.text-box {
	position: relative;
}

.text-field {
	width: 100%;
	height: 56px;
	font-size: 16px;
	padding: 24px 12px 8px;
	font-family: inherit;
	color: var(--font-color);
	border: none;
	background: var(--background-shade-40);
	border-radius: 4px;
	/* outline:  */
}

.text-field::after {
	opacity: 0;
	outline: 2px solid var(--font-color);
	transition: outline-color 0.1s;
}
.text-field::after:focus {
	opacity: 1;
	outline: 2px solid var(--font-color);
}

.text-field::placeholder {
	color: transparent;
}

.text-field ~ .field-label {
	background-color: transparent;
	cursor: text;
	position: absolute;
	display: block;
	transition-duration: 0.2s;
	transition-property: top, font-size, transform, margin-left;
	margin-left: 12px;
	font-size: 14px;
	top: 4px;
	transform: translateY(0);
	color: var(--light-accent);
}

.text-field:placeholder-shown ~ .field-label {
	top: 50%;
	transform: translateY(-50%);
	margin-left: 16px;
	font-size: 16px;
}

.text-field:focus ~ .field-label {
	font-size: 14px;
	top: 4px;
	margin-left: 12px;
	transform: translateY(0);
}

.supporting-text {
	width: calc(100% - 32px);
	font-size: 14px;
	margin-top: 4px;
	margin-right: 16px;
	margin-left: 16px;
	margin-bottom: 0px;
	overflow: hidden;
	max-height: 1000px;
	transition: all 0.3s ease-in-out;
}

.supporting-text:empty {
	opacity: 0;
	max-height: 0;
	margin-top: 0;
}

.error-icon {
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
}

.field-group.error {
	color: var(--error-color);
}

.field-group.error .text-field {
	outline: 2px solid var(--error-color);
	padding-right: 52px;
}

.field-group.error .text-field:focus {
	outline: 2px solid var(--error-color);
}

.field-group.error .field-label {
	color: var(--error-color);
}

.field-group.error .supporting-text {
	color: var(--error-color);
}
</style>
