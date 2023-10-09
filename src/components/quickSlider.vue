<template>
	<div>
		<input type="range" :min="min" :max="max" :value="modelValue" @input="onInput" />
		<p>Value: {{ modelValue }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps(['modelValue', 'min', 'max'])
const emits = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
	const newValue = (event.target as HTMLInputElement).value
	emits('update:modelValue', newValue)
}
</script>
