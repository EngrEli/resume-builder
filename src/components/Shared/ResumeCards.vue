<template>
    <div class="cards mb-5 h-[224px] active">
        <img src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg" alt="">
    </div>
</template>

<style scoped>
.cards {
    width: calc(50% - 12px);
}

.cards.active {
    border: 4px solid rgb(26, 145, 240);
    border-radius: 7px;
    position: relative;
}

.cards::after {
    content: "\f078";  /* this is your text. You can also use UTF-8 character codes as I do here */
    font-family: "Font Awesome 6 Free";
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
}

img {
    height: 100%;
    object-fit: cover;
}
</style>
<script setup lang="ts"></script>
