<template>
  <ul>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  components: {
    AppListItem,
  },
  mounted() {
    // comment here to test ErrorHandlingLocal
    // throw new Error("Error Thrown!");
  },
};
</script>
<style scoped></style>
