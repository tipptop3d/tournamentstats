<template>
	<div class="wrapper">
		<BaseUpload
			class="label"
			:id="id"
			:maxFileSizeMb="maxFileSizeMb"
			v-model="file"
			:accept="accept"
		>
			<BaseButton @click.prevent="input?.click()" icon="publish"> Upload </BaseButton>
		</BaseUpload>
		<p class="file-name">{{ file?.name }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseUpload from './BaseUpload.vue'
import BaseButton from './BaseButton.vue'

const props = withDefaults(
	defineProps<{
		id: string
		label: string
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
.wrapper {
	display: inline-flex;
	position: relative;
	justify-content: center;
	flex-direction: column;
	gap: 0px;
}

.file-name {
	font-size: 14px;
	min-height: 22.4px;
}
</style>
