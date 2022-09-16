<template>
  <div>
    <p>Current Page::{{ currentPage }}</p>
    <button v-for="n in totalPage" @click="changePage(n)">
      {{ n }}
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
