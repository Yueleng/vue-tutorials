<template>
  <h2>{{ movie.title }}</h2>
</template>
<script>
import { inject } from "vue";
export default {
  // props: ["title"],
  // inject: ["title"],
  setup() {
    const movie = inject("movie");
    return { movie };
  },
};
</script>
<style scoped>
h2 {
  color: hsl(240deg, 100%, 80%);
}
</style>
