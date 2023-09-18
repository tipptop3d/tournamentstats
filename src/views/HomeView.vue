<template>
	<div class="view-wrapper">
		<BaseButton class="create-button">Create New Tournament</BaseButton>
	</div>
</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
</script>

<style scoped>
.view-wrapper {
	flex: 1;
	display: grid;
	place-items: center;
}
</style>