<template>
	<BaseButton class="button">
		<span class="icon material-symbols-outlined">
			<slot></slot>
		</span>
	</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
</script>

<style scoped>
.button {
	min-height: 0;
	min-width: 0;
	aspect-ratio: 1;
	border-radius: 50%;
	padding: 16px;
}
</style>
