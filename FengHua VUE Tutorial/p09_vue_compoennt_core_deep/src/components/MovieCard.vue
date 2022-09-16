<template>
  <div class="card">
    <!-- <MovieItem :title="movie.title" :description="movie.description" /> -->
    <MovieItem :description="movie.description" />
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movie: {
        title: "Inception",
        description: "Inception is about steal your dream",
      },
    };
  },
  provide() {
    return {
      title: this.movie.title,
    };
  },
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
