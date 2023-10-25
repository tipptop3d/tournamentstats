<template>
	<BaseButton class="button" :class="{ 'icon-button': props.icon != null }">
		<span class="material-symbols-outlined">
			{{ props.icon }}
		</span>
	</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const props = defineProps<{
	icon: string
}>()
</script>

<style scoped>
.button {
	min-height: 0;
	min-width: 0;
	aspect-ratio: 1;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0;
	padding: 0;
}
</style>
