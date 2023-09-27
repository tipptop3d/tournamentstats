<template>
	<div class="wrapper">
		<input
			ref="input"
			class="custom-file-input"
			id="file"
			type="file"
			accept="image/*"
			@change="onFileChange"
		/>
		<label class="label" for="file">
			<BaseButton @click.prevent="input?.click()" class="btn" icon="publish"> Upload </BaseButton>
		</label>
		<p class="file-name">{{ file?.name }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const input = ref<HTMLInputElement>()

const props = withDefaults(
	defineProps<{
		label: string
		accept: string
		maxFileSize: number
	}>(),
	{}
)

const emits = defineEmits<{
	change: [file: File]
}>()

const file = ref<File>()

function onFileChange(e: Event) {
	var files = (e.target as HTMLInputElement).files
	if (!files?.length) {
		return
	}
	file.value = files[0]
	emits('change', file.value)
}
</script>

<style scoped>
.wrapper {
	display: inline-flex;
	position: relative;
	justify-content: center;
	flex-direction: column;
	gap: 0px;
}

.custom-file-input {
	display: none;
}

.label {
	display: inline-block;
}

.file-name {
	font-size: 14px;
	min-height: 22.4px;
}
</style>
