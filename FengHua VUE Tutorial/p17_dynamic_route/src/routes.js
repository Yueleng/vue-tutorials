import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";
import PrintRoute from "./pages/PrintRoute.vue";
import BlogPostPage2 from "./pages/BlogPostPage2.vue";
import UserDetailsPage from "./pages/UserDetailsPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
    alias: ["/index", "/blogs"],
  },
  {
    path: "/:postId",
    component: BlogPostPage,
    alias: "/posts/:postId",
  },
  {
    path: "/pages",
    component: PrintRoute,
  },
  {
    path: "/users/:id/:fullname",
    name: "userDetails",
    component: UserDetailsPage,
  },
  { path: "/pages/:id", name: "page", component: BlogPostPage2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
