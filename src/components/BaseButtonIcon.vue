<template>
	<BaseButton class="button" :class="{ 'icon-button': props.icon != null }">
		<span class="material-symbols-outlined" :class="{ right: props.position == 'right' }">
			{{ props.icon }}
		</span>
		<slot></slot>
	</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const props = withDefaults(
	defineProps<{
		icon: string
		position?: 'left' | 'right'
	}>(),
	{
		position: 'left'
	}
)
</script>

<style scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 8px;
	padding: 12px 14px;
}

.right {
	flex-direction: row-reverse;
}
</style>
