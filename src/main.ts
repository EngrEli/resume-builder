// import "@/style.css";
import "./index.css";
import "./assets/reset.css";
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faMagnifyingGlass,
    faMinus,
    faPlus,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMagnifyingGlass, faMinus, faPlus, faAngleDown);

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
