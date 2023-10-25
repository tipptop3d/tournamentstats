<template>
	<input
		ref="input"
		class="custom-file-input"
		:id="id"
		type="file"
		:accept="accept"
		@change="onFileChange"
	/>
	<label tabindex="0" :for="id" @keyup.space.enter="input?.click()" @click.prevent="input?.click()">
		<slot> Upload </slot>
	</label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref<HTMLInputElement>()

const props = withDefaults(
	defineProps<{
		id: string
		accept: string
		maxFileSizeMb: number
		modelValue: File | null
	}>(),
	{}
)

const emits = defineEmits<{
	'update:modelValue': [file: File | null]
}>()

const file = ref<File | null>()

function onFileChange(e: Event) {
	var files = (e.target as HTMLInputElement).files
	if (!files?.length) {
		file.value = null
	} else {
		file.value = files[0]
	}
	emits('update:modelValue', file.value)
}
</script>

<style scoped>
.custom-file-input {
	display: none;
}
</style>
