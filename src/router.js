import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./pages/Home.vue";
import NetworkList from "./pages/NetworkList.vue";
import ListView from "./pages/item/index.vue";
import ChartView from "./pages/item/chart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "network-list",
      component: NetworkList,
    },
    {
      path: "/list/:type_id",
      name: "item-view",
      component: ListView,
    },
    {
      path: "/list/chart/:id",
      name: "chart-view",
      component: ChartView,
    },
  ],
});

export default router;
