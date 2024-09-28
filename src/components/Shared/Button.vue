<template>
    <button :class="[type, 'btn']" @click="btnClick">
        <slot></slot>
    </button>
</template>

<style scoped></style>
<script setup lang="ts">
import { defineProps } from "vue";
defineProps(["type"]);
const emit = defineEmits(["clickBtn"]);

const btnClick = () => {
    emit("clickBtn");
};
</script>
