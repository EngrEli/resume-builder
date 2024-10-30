<template>
    <div
        class="cards active w-[calc(50% - 12px)] after-translate-x-2/4 after-translate-y-2/4 relative mb-5 h-[224px] bg-[#FFF] after:left-2/4 after:top-2/4 after:content-[''] hover:cursor-pointer"
    >
        <img
            src="https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=1,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg"
            alt=""
            class="h-full rounded-[7px] object-cover"
        />
        <div
            class="cards-active-icon-container absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full bg-blue-prime"
        >
            <font-awesome-icon
                :icon="['fas', 'fa-angle-down']"
                class="cards-active-icon"
            />
        </div>
    </div>
</template>

<style scoped>
.cards.active {
    border: 4px solid rgb(26, 145, 240);
    border-radius: 7px;
    position: relative;
}

.cards-active-icon {
    color: #fff;
}
</style>
<script setup lang="ts"></script>
