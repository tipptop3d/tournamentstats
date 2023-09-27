<template>
	<div class="grid">
		<div class="grid-element-2">
			<BaseButton>Test</BaseButton>
			<BaseButton icon="Favorite" position="left">add</BaseButton>
			<BaseButton disabled>Disabled</BaseButton>
			<BaseIconButton>favorite</BaseIconButton>
		</div>
		<div class="grid-element">
			<BaseTextField
				type="text"
				v-model="text"
				:error="true"
				:supporting-text="supportingText"
				placeholder="Your Email"
			>
			</BaseTextField>
			<BaseTextField type="text" v-model="text" placeholder="Your Email"></BaseTextField>
			<BaseTextField
				:disabled="tex ? true : null"
				type="text"
				v-model="text"
				placeholder="disabled"
			></BaseTextField>
		</div>
		<BaseCheckbox></BaseCheckbox>
		<BaseCheckbox></BaseCheckbox>
		<BaseCheckbox></BaseCheckbox>
		<BaseUpload label="upload" accept="image/*" :max-file-size="2"></BaseUpload>
		<BaseUploadImagePreview label="Your Image" :max-file-size="2"></BaseUploadImagePreview>
	</div>
</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
import BaseIconButton from '../components/BaseIconButton.vue'
import BaseCheckbox from '../components/BaseCheckbox.vue'
import BaseTextField from '../components/BaseTextField.vue'
import BaseUpload from '../components/BaseUpload.vue'
import BaseUploadImagePreview from '../components/BaseUploadImagePreview.vue'
import { ref, computed } from 'vue'

const text = ref('55')
const tex = ref(false)
const supportingText = computed(() => (tex.value ? 'Invalid Login' : null))
</script>
<style scoped>
.grid,
.grid-element,
.grid-element > * {
	margin: 10px;
}

.grid-element {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.grid-element-2 {
	display: flex;
	align-items: center;
	gap: 20px;
}
</style>
