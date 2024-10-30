<template>
    <div
        class="flex w-[410px] flex-wrap justify-between overflow-y-auto border border-y-0 border-l-0 border-r-[rgba(255,255,255,0.15)] p-8"
    >
        <ResumeCards />
        <ResumeCards />
        <ResumeCards />
        <ResumeCards />
        <ResumeCards />
        <ResumeCards />
        <ResumeCards />
    </div>
</template>

<style scoped></style>
<script setup lang="ts">
import ResumeCards from './ResumeCards.vue';
</script>
