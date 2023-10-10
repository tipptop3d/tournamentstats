<template>
	<div class="grid">
		<div class="grid-element-2">
			<BaseButton @click="console.log('test')">Test</BaseButton>
			<BaseButton @click="console.log('add')" icon="Favorite" position="left">add</BaseButton>
			<BaseButton disabled>Disabled</BaseButton>
			<BaseButtonIcon @click="console.log('favorite')">favorite</BaseButtonIcon>
		</div>
		<div class="grid-element">
			<BaseInputTextField
				id="1"
				type="text"
				v-model="text"
				:error="true"
				:supporting-text="supportingText"
				placeholder="Your Email"
			/>
			<BaseInputTextField id="2" type="text" v-model="text" placeholder="Your Email" />
			<BaseInputTextField
				id="3"
				:disabled="tex ? true : null"
				type="text"
				v-model="text"
				placeholder="disabled"
			/>
		</div>
		<BaseInputCheckbox></BaseInputCheckbox>
		<BaseInputCheckbox></BaseInputCheckbox>
		<BaseInputCheckbox></BaseInputCheckbox>
		<BaseInputFile id="file1" v-model="file" accept="image/*" :max-file-size-mb="1" />
		<BaseInputFileImagePreview
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
import BaseButtonIcon from '../components/BaseButtonIcon.vue'
import BaseInputCheckbox from '../components/BaseInputCheckbox.vue'
import BaseInputTextField from '../components/BaseInputTextField.vue'
import BaseInputFile from '../components/BaseInputFile.vue'
import BaseInputFileImagePreview from '../components/BaseInputFileImagePreview.vue'
import { ref, computed } from 'vue'
import quickSlider from '../components/quickSlider.vue'
import BaseInputFileButton from '../components/BaseInputFileButton.vue'

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
