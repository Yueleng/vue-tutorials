import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const loggedIn2 = true;

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
  // 路由导航守卫
  {
    path: "/blogs",
    component: BlogManagement,
    // beforeEnter(to, from) {
    //   if (!loggedIn2) {
    //     console.log("路由导航守卫阻止进入 /blogs");
    //     return "/login";
    //   }
    // },
    // beforeEnter 还支持多个回调函数, 放到数组里面依次执行
    beforeEnter: [authBlogsPage],
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
        meta: { private: true },
      },
      {
        path: "details/:postId",
        component: BlogDetails,
        beforeEnter(to, from) {
          console.log(
            "this should only be called when firsted enterd /:postId"
          );
        },
      },
    ],
  },
];

function authBlogsPage(to, from) {
  if (!loggedIn2) {
    console.log("路由导航守卫阻止进入 /blogs");
    return "/login";
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass, // 不精确的高亮, 设置自定义的class
  // linkExactActiveClass, // 精确的高亮, 设置自定义的class
  scrollBehavior(to, from, savedPosition) {
    console.log("savedPosition outer", savedPosition);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("savedPosition inner", savedPosition);
        if (savedPosition) {
          return resolve(savedPosition);
        } else {
          return resolve({ top: 0 });
        }
      }, 2000);
    });
  },
});

const loggedIn = true;
const loggedInMeta = false;

// 配置全局导航守卫
router.beforeEach((to, from) => {
  console.log("全局守卫 to", to);
  console.log("全局守卫 from", from);
  if (to.path.startsWith("/blogs")) {
    if (!loggedIn) {
      // return "/login";
      return {
        name: "login",
      };
    }
  }
  // if (to.matched.some((record) => record.meta.private) && !loggedInMeta) {
  //   return "/login";
  // }

  if (to.meta.private && !loggedInMeta) {
    return "/login";
  }
});

router.beforeResolve((to) => {
  if (to.path.startsWith("/blogs")) {
    console.log("全局守卫 beforeResolve triggered: 用户已登陆");
  }
});

router.afterEach((to) => {
  document.title = to.path;
});

export default router;
