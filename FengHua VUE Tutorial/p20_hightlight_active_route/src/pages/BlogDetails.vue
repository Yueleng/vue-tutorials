<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <ul>
      <li
        v-for="i in [
          1,
          2,
          ,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          1,
          2,
          ,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          1,
          2,
          ,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
        ]"
      >
        <p>{{ blog.body }}</p>
      </li>
    </ul>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";
export default {
  data() {
    return {
      blog: {},
    };
  },
  beforeRouteLeave() {
    const result = confirm("真的要离开吗？");
    if (!result) return false;
  },

  // 也只在路由变化的时候调用，组件复用的时候不会重新执行
  beforeRouteEnter(to, from, next) {
    console.log("组件内部路由守卫", to);
    console.log("beforeRouteEnter 中 this 没有值，因为组件还没有实例化", this);
    // next回调函数的参数是组件的实例
    next((vm) => {
      setTimeout(() => {
        vm.blog = getBlogPostById(to.params.postId);
      }, 1000);
    });
  },
  beforeRouteUpdate(to) {
    this.blog = {};
    setTimeout(() => {
      this.blog = getBlogPostById(to.params.postId);
    }, 1000);
  },
};
</script>
<style scoped>
article {
  padding: 48px;
}
</style>
