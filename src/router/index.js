import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SearchResult from "@/views/SearchResult.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:search_text_",
    name: "SearchResult",
    component: SearchResult,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;