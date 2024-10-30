<template>
    <EditorHeader />
    <div class="flex h-full overflow-hidden bg-[#495163]">
        <ResumeListSection />
        <ResumeSelectedDisplay />
    </div>
</template>

<style scoped></style>
<script setup lang="ts">
import EditorHeader from '../Shared/EditorHeader.vue';
import ResumeListSection from '../Shared/ResumeListSection.vue';
import ResumeSelectedDisplay from '../Shared/ResumeSelectedDisplay.vue';
</script>
