<template>
	<div class="wrapper">
		<BaseUpload
			:label="props.label"
			accept="image/*"
			:maxFileSize="props.maxFileSize"
			@change="handleFileChange"
		>
		</BaseUpload>
		<img v-show="imageURL" class="image" ref="image" @click="removeImage" />
		<div v-show="!imageURL" class="placeholder"></div>
	</div>
</template>

<script setup lang="ts">
import BaseUpload from './BaseUpload.vue'
import { onMounted, ref, watch } from 'vue'

const image = ref<HTMLImageElement | null>(null)
const imageURL = ref<string>('')

watch(imageURL, (newURL, oldURL) => {
	if (image.value != null) {
		image.value.src = newURL
	}
	if (oldURL) {
		URL.revokeObjectURL(oldURL)
	}
})

const props = withDefaults(
	defineProps<{
		label: string
		maxFileSize: number
	}>(),
	{}
)

function removeImage() {
	imageURL.value = ''
}

function handleFileChange(file: File) {
	imageURL.value = URL.createObjectURL(file)
}
</script>

<style scoped>
.wrapper {
	display: inline-flex;
	flex-direction: column;
}

.image,
.placeholder {
	height: 300px;
	width: 300px;
}

.image {
	-webkit-transition: all 0.5s ease;
	transition: all 0.5s ease;
	border: 4px dashed var(--main-color);
}

.image:hover {
	-webkit-filter: brightness(50%);
	filter: brightness(50%);
}

.placeholder {
	border: 4px dashed gray;
}
</style>
