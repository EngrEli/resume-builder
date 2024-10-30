import { createWebHashHistory, createRouter } from "vue-router";

import TemplateSelectView from "@/components/Views/TemplateSelectView.vue";
import EditorView from "@/components/Views/EditorView.vue";

const routes = [
    {
        // path: "/",
        path: "/template-select",
        name: "TemplateSelectView",
        component: TemplateSelectView,
    },
    {
        path: "/",
        name: "EditorView",
        component: EditorView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
