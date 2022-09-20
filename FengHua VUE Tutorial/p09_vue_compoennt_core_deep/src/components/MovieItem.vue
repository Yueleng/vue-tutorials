<template>
  <!-- <MovieTitle :title="title" /> -->
  <MovieTitle />
  <div class="description">
    {{ description }}
  </div>
</template>

<script>
import MovieTitle from "./MovieTitle.vue";
import { inject } from "vue";
export default {
  components: { MovieTitle },
  // props: ["title", "description"],
  // props: ["description"],
  setup() {
    const description = inject("description");
    return { description };
  },
};
</script>

<style scoped>
.description {
  margin-top: 12px;
  color: hsl(240deg, 10%, 80%);
}
</style>
