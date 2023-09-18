<template>
  <TheHeader />
  <RouterView />
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
