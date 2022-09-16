<template>
  <div>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
    <p>Current Page:{{ currentPage }}</p>
    <p v-if="showTotal">Total: {{ totalPage }}</p>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  mixins: [PaginationMixin],
  props: ["showTotal"], // merge with other props
  data() {
    return {
      currentPage: 1, // over-write
    };
  },
  mounted() {
    console.log("execute mounted lc event in PaginationComponent2");
  },
};
</script>
<style scoped>
div {
  padding: 24px 0;
}

p {
  margin-top: 12px;
}

a {
  color: hsl(280deg, 100%, 80%);
  width: 24px;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
}
</style>
