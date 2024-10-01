<template>
    <div class="h-16 bg-[#0f141e] text-[white]">
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
