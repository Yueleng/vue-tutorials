<template>
  <div>
    <input v-model="content" />
    <p>You have typed {{ count }} characters</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
};
</script>

<style scoped></style>
