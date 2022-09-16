<template>
  <label>
    <span>Search: </span>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  props: ["modelValue"], // "modelValue" is a fixed name
  emits: ["update:modelValue"], // "update:modelValue" is also a fixed name
};
</script>
<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
</style>
