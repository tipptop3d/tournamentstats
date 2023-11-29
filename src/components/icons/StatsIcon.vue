<template>
	<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
		<path
			v-if="filled"
			d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z"
		/>
		<path
			v-else
			d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z"
		/>
	</svg>
</template>
<script setup lang="ts">
withDefaults(
	defineProps<{
		filled: boolean
	}>(),
	{ filled: false }
)
</script>
<style scoped></style>
