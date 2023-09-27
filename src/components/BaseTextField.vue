<template>
	<div class="field-group" :class="{ error: props.error, disabled: $attrs['disabled'] }">
		<div class="text-box">
			<input
				id="input"
				:type="type"
				class="text-field"
				:value="modelValue"
				v-bind="$attrs"
				@input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
			/>
			<label for="input" class="field-label"> {{ $attrs['placeholder'] }}</label>
			<span v-if="error" class="error-icon material-symbols-outlined error">error</span>
		</div>
		<div class="supporting-text">{{ props.supportingText }}</div>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false
})

const props = withDefaults(
	defineProps<{
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
	background: inherit;
}

.field-group.disabled {
	opacity: 0.5;
}

.text-box {
	position: relative;
	background: inherit;
}

.text-field {
	width: 100%;
	height: 56px;
	font-size: 16px;
	color: var(--font-color);
	font-family: inherit;
	padding: 12px 16px;
	background: transparent;
	outline: 1px solid var(--font-color);
	border: none;
	border-radius: 4px;
	transition: outline 0.2s ease;
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

.text-field ~ .field-label {
	background-color: inherit;
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

.text-field:placeholder-shown ~ .field-label {
	top: 16px;
	font-size: 16px;
}

.text-field:focus ~ .field-label {
	font-size: 12px;
	top: -10px;
	color: var(--main-color);
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
}

.field-group.error {
	color: var(--error-color);
}

.field-group.error .text-field {
	color: var(--error-color);
	outline: 1px solid var(--error-color);
	padding-right: 52px;
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
