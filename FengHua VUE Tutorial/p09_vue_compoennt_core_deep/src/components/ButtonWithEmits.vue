<template>
  <button @click="$emit('buttonClick', 'Button was clicked')">
    Button With Emits
  </button>
</template>

<script>
export default {
  emits: ["buttonClick"],
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
