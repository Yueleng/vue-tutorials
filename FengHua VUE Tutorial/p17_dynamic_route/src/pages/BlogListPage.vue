<template>
  <main>
    <div className="blogPosts">
      <article v-for="blogPost in blogPosts" :key="blogPost.id">
        <h2>
          <router-link :to="`/${blogPost.id}`">{{
            blogPost.title
          }}</router-link>
        </h2>
        <p>{{ blogPost.body.substring(0, 100) + "..." }}</p>
        <footer>
          <!-- <button @click="$router.push(`/${blogPost.id}`)">
            Read the full article
          </button> -->
          <!-- relace vs push vs go: (number) => {} vs back vs forward-->
          <button
            @click="
              $router.push({
                name: 'blogPost',
                params: {
                  postId: blogPost.id,
                },
              })
            "
          >
            Read the full article
          </button>
        </footer>
      </article>
    </div>
  </main>
</template>
<script>
import { getAllPosts } from "../data/blogPosts";

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  created() {
    this.blogPosts = getAllPosts();
  },
};
</script>
<style scoped>
.blogPosts {
  max-width: 600px;
  display: grid;
  row-gap: 48px;
}
</style>
