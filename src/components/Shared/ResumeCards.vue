<template>
    <div class="cards mb-5 h-[224px] active bg-[#FFF] relative">
        <img src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg" alt="">
        <div class="cards-active-icon-container absolute top-1/2 left-1/2">
            <font-awesome-icon :icon="['fas', 'fa-angle-down']" class="cards-active-icon"/>
        </div>
    </div>
</template>

<style scoped>
.cards {
    width: calc(50% - 12px);
}

.cards:hover {
    cursor: pointer;
}

.cards.active {
    border: 4px solid rgb(26, 145, 240);
    border-radius: 7px;
    position: relative;
}

.cards::after {
    content: "";
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
}

.cards-active-icon-container {
    height: 40px;
    width: 40px;
    background-color: rgb(26, 145, 240);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cards-active-icon {
    color: #FFF;
}

img {
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
}
</style>
<script setup lang="ts"></script>
