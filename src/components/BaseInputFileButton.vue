<template>
	<div class="upload-wrapper">
		<BaseInputFile :id="id" :maxFileSizeMb="maxFileSizeMb" v-model="file" :accept="accept">
			<div class="wrappe2">
				<BaseButtonIcon class="upload-button" icon="upload_file">
					<slot>Upload File</slot>
				</BaseButtonIcon>
				<span v-if="file?.name" class="file-name">{{ file?.name }}</span>
			</div>
		</BaseInputFile>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInputFile from './BaseInputFile.vue'
import BaseButtonIcon from './BaseButtonIcon.vue'

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

const input = ref<HTMLInputElement>()

const file = computed({
	get() {
		return props.modelValue
	},
	set(file: File | null) {
		emits('update:modelValue', file)
	}
})
</script>

<style scoped>
.upload-wrapper {
	display: inline;
}

.wrappe2 {
	display: inline-flex;
	position: relative;
	justify-content: center;
	flex-direction: column;
	gap: 0px;
	max-width: min-content;
}
.upload-button {
	width: max-content;
}
.file-name {
	contain: size;
	font-size: 14px;
	min-height: 22.4px;
	text-wrap: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
