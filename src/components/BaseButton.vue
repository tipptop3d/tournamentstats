<template>
	<button class="button">
		<slot class="text"></slot>
	</button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button {
	font-family: inherit;
	color: inherit;
	font-size: 20px;
	font-weight: 700;
	background-color: var(--primary-color);
	transition: background-color 0.3s ease, box-shadow 0.3s ease;
	border: none;
	border-radius: 8px;
	padding: 12px 24px 12px 24px;
	cursor: pointer;

}

.button:hover {
	background-color: var(--hover-color);
	box-shadow: 0px 4px 6px 0px var(--shadow-color-20);
}
</style>