<template>
  <label>
    <span>Search: </span>
    <input
      type="text"
      :value="searchTerm"
      @input="$emit('update:searchTerm', $event.target.value)"
    />
  </label>
  <label>
    <span>Category: </span>
    <select
      :value="category"
      @change="$emit('update:category', $event.target.value)"
    >
      <option value="default">Default</option>
      <option value="fontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="fullstack">Fullstack</option>
    </select>
  </label>
</template>
<script>
export default {
  props: ["searchTerm", "category"],
  emits: ["update:searchTerm", "update:category"],
};
</script>
<style scoped>
label {
  display: block;
  margin-bottom: 20px;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

select {
  border: 1px solid hsl(280deg, 50%, 50%);
  background: none;
  color: white;
  padding: 6px;
  border-radius: 4px;
}
</style>
