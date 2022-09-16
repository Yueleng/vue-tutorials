<template>
  <p v-if="error">Oops! Something is wrong.</p>
  <ul v-else>
    <AppListItem v-for="item in data"
      >{{ item }} in ErrorHandlingLocal/AppListItem</AppListItem
    >
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  data() {
    return {
      error: false,
    };
  },
  components: {
    AppListItem,
  },
  errorCaptured(err, instance, info) {
    // console.log(err);
    // console.log(instance);
    // console.log(info);

    this.error = true;
    return false; // comment and uncomment to see the diff
  },
};
</script>
<style scoped></style>
