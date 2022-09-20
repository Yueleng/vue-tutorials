<template>
  <div class="card">
    <!-- <MovieItem :title="movie.title" :description="movie.description" /> -->
    <MovieItem />
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import { provide, toRef, ref } from "vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = ref({
      title: "Movie",
      description: "This is the description of the movie",
    });

    provide("movie", movie);
    provide("description", toRef(movie.value, "description"));

    setTimeout(() => {
      movie.value.title = "Movie - modified";
      movie.value.description = "Movie Description - modified";
    }, 1500);

    return {};
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
