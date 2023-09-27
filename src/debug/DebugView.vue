<template>
	<div class="grid">
		<div class="grid-element-2">
			<BaseButton>Test</BaseButton>
			<BaseButton icon="Favorite" position="left">add</BaseButton>
			<BaseButton disabled>Disabled</BaseButton>
			<BaseIconButton>favorite</BaseIconButton>
		</div>
		<div class="grid-element">
			<BaseTextField type="text" v-model="text"></BaseTextField>
			<BaseTextField type="text" v-model="text" :error="true"></BaseTextField>
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
import BaseIconButton from '@/components/BaseIconButton.vue';
import BaseCheckbox from '../components/BaseCheckbox.vue'
import BaseTextField from '../components/BaseTextField.vue'
import { ref } from 'vue';

const text = ref('55')
</script>
<style scoped>
.grid,
.grid-element,
.grid-element>* {
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
