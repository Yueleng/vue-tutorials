<template>
  <button @click="buttonClick && buttonClick('Button Clicked')">
    Button With Props
  </button>
</template>

<script>
export default {
  props: ["buttonClick"],
};
</script>

<style scoped>
button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
}
</style>
