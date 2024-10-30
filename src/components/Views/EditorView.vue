<template>
    <div class="flex h-full">
        <Editor />
        <EditorDisplay />
    </div>
</template>

<style scoped></style>
<script setup lang="ts">
import Editor from '../Shared/Editor.vue';
import EditorDisplay from '../Shared/EditorPreview.vue';
</script>
