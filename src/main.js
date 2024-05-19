import "./style.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import "v-network-graph/lib/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VNetworkGraph from "v-network-graph";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import Ripple from "primevue/ripple";

createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .use(VNetworkGraph)
  .use(router)
  .directive("tooltip", Tooltip)
  .directive("ripple", Ripple)
  .mount("#app");
