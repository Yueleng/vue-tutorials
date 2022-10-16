<template>
  <div class="container">
    <aside class="leftSideBar">
      <h2>博客管理</h2>
      <nav>
        <router-link to="/blogs">管理首页</router-link>
        <router-link to="/blogs/new">添加博客</router-link>
        <router-link to="/blogs/details/1">博客详情1</router-link>
        <router-link to="/blogs/details/2">博客详情2</router-link>
      </nav>
    </aside>
    <main class="content">
      <router-view></router-view>
      <router-view name="rightSideBar"></router-view>
    </main>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
}

.leftSideBar {
  padding: 48px;
  border-right: 1px solid hsl(280deg, 50%, 50%);
}

.leftSideBar nav {
  margin-top: 48px;
  display: grid;
  gap: 24px;
  justify-content: center;
}

.content {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: start;
}

/* 通过 class 的 css行为 来高亮active route */
/* 通过添加 -exact 来确定exact match 的行为 */
.router-link-exact-active {
  position: relative;
  color: hsl(280deg, 100%, 90%);
}

.router-link-exact-active::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  background: hsl(280deg, 100%, 70%);
  left: -14px;
}
</style>
