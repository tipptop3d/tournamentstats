<template>
	<TheHeader />
	<form>
		<h2>New Tournament</h2>
		<label>Tournament Name</label>
		<input>
		<label>Tournament Logo</label>
		<input>
		<label>Private</label>
		<input>
		<button>Create</button>
	</form>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
</script>

<style scoped></style>
