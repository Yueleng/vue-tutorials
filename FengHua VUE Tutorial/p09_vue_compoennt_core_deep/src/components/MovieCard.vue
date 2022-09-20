<template>
  <div class="card">
    <!-- <MovieItem :title="movie.title" :description="movie.description" /> -->
    <MovieItem :description="movie.description" />
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import { provide } from "vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = {
      title: "Movie",
      description: "This is the description of the movie",
    };

    provide("title", movie.title);

    return { movie };
  },
  // data() {
  //   return {
  //     movie: {
  //       title: "Inception",
  //       description: "Inception is about steal your dream",
  //     },
  //   };
  // },
  // provide() {
  //   return {
  //     title: this.movie.title,
  //   };
  // },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  padding: 12px;
  border: 1px solid hsl(240deg, 100%, 80%);
  border-radius: 4px;
}
</style>
