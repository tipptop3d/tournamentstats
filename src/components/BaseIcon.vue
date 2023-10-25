<template>
	<span class="material-symbols-outlined">
		{{ props.icon }}
	</span>
</template>

<script setup lang="ts">
const props = defineProps<{
	icon: string
}>()
</script>

<style scoped></style>
