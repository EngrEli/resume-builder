<template>
    <div
        class="flex min-h-16 items-center justify-between bg-[#0f141e] px-8 text-[white]"
    >
        <div>Back to Editor</div>
        <LineSpacingEditor />
        <Button type="btn-primary" @click-btn="testFunc">Download PDF</Button>
    </div>
</template>

<style scoped></style>
<script setup lang="ts">
import Button from './Button.vue';
import LineSpacingEditor from './LineSpacingEditor.vue';

const testFunc = () => {
    alert('test here');
    console.log('here');
};
</script>
