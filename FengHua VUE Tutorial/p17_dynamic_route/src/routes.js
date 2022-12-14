import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";
import PrintRoute from "./pages/PrintRoute.vue";
import BlogPostPage2 from "./pages/BlogPostPage2.vue";
import UserDetailsPage from "./pages/UserDetailsPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "blog-list",
    component: BlogListPage,
    alias: ["/posts", "/blogs"],
  },
  {
    path: "/:postId",
    name: "blogPost",
    component: BlogPostPage,
    alias: "/posts/:postId",
  },
  {
    path: "/red-to-posts",
    redirect: "/posts",
  },
  {
    path: "/redirect-to-bloglist",
    redirect: {
      name: "blog-list",
    },
  },
  {
    path: "/blogs/:blogId",
    redirect: (to) => ({
      name: "blogPost",
      params: {
        // this key name: `postId` must match
        // with the {name: "blogPost"}'s path value placeholder `/:postId`
        postId: to.params.blogId,
      },
    }),
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
