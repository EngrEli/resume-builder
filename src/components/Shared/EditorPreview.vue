<template>
    <div class="flex-1 bg-[#656E83]">{{ info.name }}</div>
</template>

<style scoped></style>
<script setup lang="ts">
import { useInfoStore } from '@/stores/info';

const info = useInfoStore();
</script>
