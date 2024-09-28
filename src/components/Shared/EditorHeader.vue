<template>
    <div class="h-16 bg-[#0f141e] text-[white]">
        <div>
            <font-awesome-icon :icon="['fas', 'minus']" />
            Aa
            <font-awesome-icon :icon="['fas', 'plus']" />
        </div>

        <Button type="btn-primary" @click-btn="testFunc">Go to editor</Button>
    </div>
</template>

<style scoped></style>
<script setup lang="ts">
import Button from "./Button.vue";

const testFunc = () => {
    alert("test here");
    console.log("here");
};
</script>
