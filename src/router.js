import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./pages/home.vue";
import NetworkList from "./pages/network-list.vue";
import ListView from "./pages/item/index.vue";
import ChartView from "./pages/item/chart.vue";
import LoginView from "./pages/auth/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login-view",
      component: LoginView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true, // Add meta field to indicate protected route
      },
    },
    {
      path: "/list",
      name: "network-list",
      component: NetworkList,
      meta: {
        requiresAuth: true, // Add meta field to indicate protected route
      },
    },
    {
      path: "/list/:type_id",
      name: "list-view",
      component: ListView,
      meta: {
        requiresAuth: true, // Add meta field to indicate protected route
      },
    },
    {
      path: "/list/chart/:id",
      name: "chart-view",
      component: ChartView,
      meta: {
        requiresAuth: true, // Add meta field to indicate protected route
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next("/login");
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
