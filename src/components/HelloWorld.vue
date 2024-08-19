<template>
</template>

<script setup lang="ts">
import { ref } from "vue";

import UiButton from "./ui/UiButton/UiButton.vue";
import Badge from './ui/badge/Badge.vue'

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style lang="sass" scoped>
.read-the-docs
  @apply bg-black text-black
</style>
