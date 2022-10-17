# VUE-Tutorial

VUE Tutorials

## vscode plugins for vue dev

- `Volar`
- `ESLint`
- `Prettier - Code formmater`
- `Live Server`

## Scaffolding

- `npm install -g yarn`
- `yarn create vite`
- `yarn install`
- `vite run dev` or `vite dev`
- `yarn build`
- `yarn serve`
- `npm install -g typescript`
- `yarn add typescript --dev`

## Difference between `computed`, `methods`, `watch`

- `computed` will cache the result, while `methods` won't cache the result.
- `computed` will recalculate whenever the dependency `data` changed.
- `methods` support `parameter` passed into it. More like a javascript function.
- `computed` can be used in HTML, like `data`
- `method` can be used for more complex operations or for event handlers or for extract common logics.
- `computed` usually won't change the value of data, it is usually considered as a combination/calculation of `data`. While `watch` usually change the data and won't have any return.
- for arrays in `watch`, use object instead of function.
- in `watch`, we usually do some time comsuming or async logic.
- in `computed`, you can also change the value of `data`. But it really is not recommended. we usually don't recommend side effect introduced into the `computed`.
- in `watch`, you can use the `method` in order to reduce code.

## Components

- Why `component` design pattern:
  - Reduce each file's complexity and size,
  - Keep each file's independence,
  - Reusability.
  - Team Collaboration

## Vue Routr Guard

- 可以把导航守卫想象成 Vue Router 的生命周期钩子
- 同一个导航守卫可以创建多个，他们会按照创建次序执行
- 如果导航守卫的返回 false, 则会阻止导航跳转
- 全局配置

  ```js
  // beforeEach 导航刚触发， 组建还没有加载，且导航发生实际跳转前
  router.beforeEach((to, from) => {
    if (to.path.startsWith("/blogs")) {
      if (!loggedIn) {
        return "/login";
      }
    }
  });

  // beforeResolve, 导航守卫执行完毕，且组件加载完毕，
  //                组件中的导航守卫执行完毕之后，且导航实际跳转之前
  router.beforeResolve((to) => {
    if (to.path.startsWith("/blogs")) {
      console.log("用户已登陆。。。");
    }
  });

  // afterEach, 导航确认并实际跳转之后执行， 可以修改dom， 发送统计数据
  router.afterEach((to) => {
    document.title = to.path;
  });
  ```

- 按路由配置

  ```js
  // beforeEnter, 进入对应的路由时， 页面实际跳转前
  const routes = [
    {
      path: "/blog",
      component: BlogManagement,
      beforeEnter: (to, from) => {
        console.log(to);
        console.log(from);
      },
    },
    {
      // 注意：动态路由之间的切换，并不会反复出发路由守卫的逻辑
      // 只有首次进入该路由才会出发
      path: "/blog/:postId",
      component: BlogManagement,
      beforeEnter: (to, from) => {
        console.log(to);
        console.log(from);
      },
    },
  ];
  ```

- 在组建中配置

  ```js
  export default {
    // 导航跳转时， 但组件创建前, 不能访问组件实例 this
    beforeRouteEnter(to, from, next) {},
    // 组件复用时, 例如 /:postId 动态路由之间切换
    // this 可以访问
    beforeRouteUpdate(to, from) {},
    // 导航跳转时，组件销毁前
    beforeRouteLeave(to, from) {},
  };
  ```

  - 执行顺序
    - 先执行组件中的 `beforeReouteLeave` 导航守卫， 如果有的话
    - 执行全局的 `beforeEach` 导航守卫
    - 在复用的组件中，执行 `beforeRouteUpdate()` 导航守卫
    - 执行路由对象中的 `beforeEnter` 导航守卫
    - 解析异步的导航组件
    - 执行组件中的 `beforeRouterEnter()` 导航守卫
    - 执行全局的 `beforeResolve()` 导航守卫
    - 确认导航, 并且发生页面跳转
    - 执行全局的 `afterEach` 导航守卫
    - 更新 `DOM` 节点
    - 执行组件中的 `beforeRouterEnter`中的 `next()` 回调函数中的回调函数

- Meta 属性

  - `to.meta` 会得到 `to.matched` 所有路由的 `meta` 属性, (浅合并以及相同 `key` 子路由覆盖父级路由)
  - Best Practice: 在父级设置 `meta : {private: true}` 作为 `logged in` 验证要求即可
  -

## Typescript

- tsconfig.json folder is considered as root folder.
