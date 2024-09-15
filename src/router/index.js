import { createWebHashHistory, createRouter } from "vue-router";

import TemplateSelectView from "@/components/Views/TemplateSelectView.vue";
import EditorView from "@/components/Views/EditorView.vue";

const routes = [
    {
        path: "/",
        name: "TemplateSelectView",
        component: TemplateSelectView,
    },
    {
        path: "/editor",
        name: "EditorView",
        component: EditorView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
