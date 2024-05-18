import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import "v-network-graph/lib/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VNetworkGraph from "v-network-graph";
import PrimeVue from "primevue/config";

createApp(App).use(PrimeVue).use(VNetworkGraph).use(router).mount("#app");
