<template>
  <article>
    <p>User Name: {{ $route.params.fullname }}</p>
    <p>id params: {{ $route.params.id }}</p>
  </article>
</template>
<script>
export default {};
</script>
<style scoped>
article {
  max-width: 700px;
}
</style>
