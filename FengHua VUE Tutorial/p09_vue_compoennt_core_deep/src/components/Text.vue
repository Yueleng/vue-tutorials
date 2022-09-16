<template>
  <span class="text">
    <slot></slot>
    <a href="#">Other Element in Child Component (not root)</a>
  </span>
</template>
<script>
export default {};
</script>
<style scoped>
/* pre-define any element passed as slot */
:slotted(div) {
  color: hsl(80deg, 90%, 50%);
}
</style>
