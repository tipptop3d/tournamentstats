<template>
	<div class="grid">
		<div class="grid-element-2">
			<BaseButton @click="console.log('test')">Test</BaseButton>
			<BaseButtonIcon icon="favorite" position="left">add</BaseButtonIcon>
			<BaseButton disabled>Disabled</BaseButton>
			<BaseButtonIconRound icon="upload_file"></BaseButtonIconRound>
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
		<BaseInputCheckbox id="c1" v-model="tex">Test</BaseInputCheckbox>
		<BaseInputCheckbox id="c2" v-model="tex">Test2</BaseInputCheckbox>
		<BaseInputCheckbox id="c3" v-model="tex">Test§</BaseInputCheckbox>
		<BaseInputFileButton id="file1" v-model="file" accept=".rofl" :max-file-size-mb="1">
			Upload your .rofl
		</BaseInputFileButton>
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
import BaseButtonIconRound from '../components/BaseButtonIconRound.vue'
import BaseInputCheckbox from '../components/BaseInputCheckbox.vue'
import BaseInputTextField from '../components/BaseInputTextField.vue'
import BaseInputFile from '../components/BaseInputFile.vue'
import BaseInputFileButton from '../components/BaseInputFileButton.vue'
import BaseInputFileImagePreview from '../components/BaseInputFileImagePreview.vue'
import { ref, computed } from 'vue'
import quickSlider from '../components/quickSlider.vue'

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
