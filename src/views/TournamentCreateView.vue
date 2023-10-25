<template>
	<TheHeader />
	<form class="form-wrapper">
		<h1>New Tournament</h1>
		<BaseInputTextField
			id="tournament-name"
			placeholder="Tournament Name"
			v-model="tournamentName"
			type="text"
			:required="true"
		/>
		<BaseInputFileImagePreview
			class="input-logo"
			id="tournament-logo"
			:max-file-size-mb="1"
			width="300px"
			height="300px"
			v-model="tournamentLogo"
		/>
		<BaseInputCheckbox id="tournament-private" v-model="isPrivate">Private</BaseInputCheckbox>
		<BaseButton>Create</BaseButton>
	</form>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import BaseInputTextField from '../components/BaseInputTextField.vue'
import BaseInputFileImagePreview from '../components/BaseInputFileImagePreview.vue'
import BaseInputCheckbox from '../components/BaseInputCheckbox.vue'

import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const tournamentName = ref('')
const tournamentLogo = ref<File | null>(null)
const isPrivate = ref(false)
</script>

<style scoped>
.form-wrapper {
	align-self: center;
	background-color: var(--background-shade-20);
	width: 400px;
	padding: 28px 32px;
	margin-top: 12px;
	border-radius: 6px;
	display: flex;
	gap: 12px;
	flex-direction: column;
}

.input-logo {
	align-self: center;
}
</style>
