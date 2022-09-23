<template>
  <li>{{ msg }} <button @click="$emit('remove', id)">Delete Msg</button></li>
</template>
<script setup>
import { ref, watch, watchEffect, toRefs, defineProps } from "vue";

const props = defineProps(["msg", "id"]);
const emits = defineEmits(["remove"]);
const { msg } = toRefs(props);

watch(msg, (newMsg) => {
  console.log(newMsg);
});

function removeMessage(id) {
  console.log("Delete Msg", id);
}
</script>
<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
