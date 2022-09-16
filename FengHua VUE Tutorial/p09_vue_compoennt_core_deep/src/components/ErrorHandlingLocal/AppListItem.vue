<template>
  <li><slot></slot></li>
</template>
<script>
export default {
  mounted() {
    throw new Error("AppListItem Component Error");
  },
};
</script>
<style scoped></style>
