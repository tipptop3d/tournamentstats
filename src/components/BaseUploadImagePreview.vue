<template>
	<div class="wrapper">
		<BaseUpload v-model="file" :id="id" :accept="accept.join(', ')" :maxFileSizeMb="maxFileSizeMb">
			<div
				class="upload-box"
				@mouseover="hoverUpload = true"
				@mouseleave="hoverUpload = false"
				@drop.prevent="handleDrop"
				@dragover.prevent
				:style="{ width: width, height: height }"
			>
				<img v-if="imageURL" :src="imageURL" class="image" />
				<div
					v-show="!imageURL || hoverUpload"
					class="placeholder"
					:class="{ overlay: imageURL && hoverUpload }"
				>
					<div class="placeholder-main">
						<span class="material-symbols-outlined upload-icon">upload</span>
						<p class="label">Click or drop your image here</p>
						<p class="size-restriction">(max. {{ maxFileSizeMb }}MB)</p>
					</div>
					<p class="additional">
						Your files will be compressed on the server and eventually be downscaled to 512x512
					</p>
				</div>
			</div>
		</BaseUpload>
		<Transition name="slide-fade">
			<BaseButton class="remove-btn" v-if="file" @click="removeImage">Remove</BaseButton>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import BaseUpload from './BaseUpload.vue'
import BaseButton from './BaseButton.vue'
import { ref, watch, computed, onUnmounted } from 'vue'

const props = withDefaults(
	defineProps<{
		id: string
		width: string
		height: string
		maxFileSizeMb: number
		accept?: string[]
		modelValue: File | null
	}>(),
	{
		accept: () => ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp']
	}
)

const emits = defineEmits<{
	'update:modelValue': [file: File | null]
}>()

const imageURL = ref<string>('')
const hoverUpload = ref(false)

onUnmounted(() => {
	if (imageURL.value) {
		URL.revokeObjectURL(imageURL.value)
	}
})

const file = computed({
	get() {
		return props.modelValue
	},
	set(file: File | null) {
		emits('update:modelValue', file)
	}
})

watch(file, (newFile, oldFile) => {
	/*
	handles object urls und preview of image
	**/
	console.log('file change')
	if (oldFile) {
		URL.revokeObjectURL(imageURL.value)
	}
	if (newFile) {
		imageURL.value = URL.createObjectURL(newFile)
	} else {
		imageURL.value = ''
	}
})

function handleDrop(e: DragEvent) {
	/*
	first tries items protocol, then falls back on files protocl
	updates file ref if a file is dropped and is the correct type
	**/
	let fileDropped: File | null = null
	if (e.dataTransfer?.items) {
		const item = e.dataTransfer.items[0]
		if (item.kind === 'file') {
			fileDropped = item.getAsFile()
		}
	} else if (e.dataTransfer) {
		fileDropped = e.dataTransfer.files[0]
	}
	if (fileDropped && props.accept.includes(fileDropped.type)) {
		file.value = fileDropped
	}
}

function removeImage() {
	file.value = null
}
</script>

<style scoped>
.wrapper {
	display: inline-flex;
	flex-direction: column;
}

.upload-box {
	/* border-radius: 4px; */
	height: 300px;
	width: 300px;
	margin: 12px;
	position: relative;
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	background: var(--background-shade-40);
}
.upload-box > :is(img, div) {
	grid-area: 1 / 1 / 2 / 2;
}

.upload-box::after {
	content: '';
	pointer-events: none;
	position: absolute;
	top: -12px;
	right: -12px;
	bottom: -12px;
	left: -12px;
	border-radius: 4px;
	outline: 2px dashed var(--light-shades);
}

.image {
	height: 100%;
	width: 100%;
	transition: filter 0.4s ease-out;
	z-index: 1;
	object-fit: contain;
}

.upload-box:hover .image {
	filter: brightness(20%);
}

.placeholder {
	height: 100%;
	width: 100%;
	display: grid;
	grid-auto-rows: auto min-content;
	place-items: center;
	font-size: 22px;
	font-weight: 500;
	transition: 0.2s;
	transition-property: color, background-color;
	z-index: 2;
	text-align: center;
	background: transparent;
}

.placeholder.overlay {
	transition: opacity 0.2s;
}
.placeholder.overlay:not(:hover) {
	opacity: 0;
}
.placeholder.overlay:hover {
	opacity: 1;
}

.placeholder:hover {
	color: var(--main-color);
	background-color: var(--background-shade-50);
}

.placeholder-main {
	grid-row: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	place-self: center;
}
.upload-icon {
	font-size: 48px;
}

.label {
	width: 75%;
	line-height: 1.4;
}
.size-restriction {
	font-size: 16px;
}

.additional {
	grid-row: 2;
	align-self: end;
	font-size: 12px;
	padding-bottom: 4px;
	color: var(--light-accent);
}

.remove-btn {
	margin-top: 6px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
