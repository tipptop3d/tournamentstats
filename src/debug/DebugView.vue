<template>
	<div class="grid">
		<div class="grid-element-2">
			<BaseButton @click="console.log('test')">Test</BaseButton>
			<BaseButton @click="console.log('add')" icon="Favorite" position="left">add</BaseButton>
			<BaseButton disabled>Disabled</BaseButton>
			<BaseIconButton @click="console.log('favorite')">favorite</BaseIconButton>
		</div>
		<div class="grid-element">
			<BaseTextField
				id="1"
				type="text"
				v-model="text"
				:error="true"
				:supporting-text="supportingText"
				placeholder="Your Email"
			/>
			<BaseTextField id="2" type="text" v-model="text" placeholder="Your Email" />
			<BaseTextField
				id="3"
				:disabled="tex ? true : null"
				type="text"
				v-model="text"
				placeholder="disabled"
			/>
		</div>
		<BaseCheckbox></BaseCheckbox>
		<BaseCheckbox></BaseCheckbox>
		<BaseCheckbox></BaseCheckbox>
		<BaseUpload id="file1" v-model="file" accept="image/*" :max-file-size-mb="1" />
		<BaseUploadImagePreview
			id="file2"
			v-model="file"
			:height="size + 'px'"
			:width="size + 'px'"
			:max-file-size-mb="1"
		/>
		<quickSlider v-model="size" min="50" max="1000"></quickSlider>
		<p>Sample Text Below the Upload Test Test</p>
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
import quickSlider from '@/components/quickSlider.vue'

const text = ref('55')
const tex = ref(true)
const supportingText = computed(() => (tex.value ? 'Invalid Login' : null))

const size = ref(300)

const file = ref<File | null>(null)
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
