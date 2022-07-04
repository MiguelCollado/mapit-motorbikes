import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import NotFound from "@/views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bikes/:id",
      name: "bike-detail",
      component: () => import("../views/BikeDetailView.vue"),
    },
    {
      path: "/credits",
      name: "credits",
      component: () => import("../views/CreditsView.vue"),
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: '/404',
    },
  ],
})

export default router
