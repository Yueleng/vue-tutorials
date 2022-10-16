import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/blogs",
    component: BlogManagement,
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details",
        component: BlogDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass, // 不精确的高亮, 设置自定义的class
  // linkExactActiveClass, // 精确的高亮, 设置自定义的class
});

const loggedIn = true;

// 配置全局导航守卫
router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);
  if (to.path.startsWith("/blogs")) {
    if (!loggedIn) {
      // return "/login";
      return {
        name: "login",
      };
    }
  }
});

router.beforeResolve((to) => {
  if (to.path.startsWith("/blogs")) {
    console.log("用户已登陆");
  }
});

router.afterEach((to) => {
  document.title = to.path;
});

export default router;
