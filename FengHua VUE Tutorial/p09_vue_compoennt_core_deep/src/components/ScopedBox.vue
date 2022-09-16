<template>
  <p>This is Scoped Style, only affecting styles inside the components</p>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  background-color: hsl(260deg, 100%, 60%, 0.7);
  padding: 1em;
  border-radius: 4px;
}
</style>
