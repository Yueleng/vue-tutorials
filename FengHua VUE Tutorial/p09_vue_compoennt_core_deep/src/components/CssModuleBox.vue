<template>
  <div>
    <p :class="$style.paragraph">This box uses Css modules</p>
  </div>
</template>
<script>
export default {};
</script>
<style module>
.paragraph {
  background: hsl(320deg, 100%, 60%);
  font-size: 24px;
}
</style>
