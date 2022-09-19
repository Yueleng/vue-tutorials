<template>
  <li>{{ msg }} <button @click="removeMessage(id)">Delete Msg</button></li>
</template>
<script>
import { ref, watch, watchEffect, toRefs } from "vue";

export default {
  props: ["msg", "id"],
  setup(props) {
    const { msg } = toRefs(props);

    watch(msg, (newMsg) => {
      console.log(newMsg);
    });

    function removeMessage(id) {
      console.log("Delete Msg", id);
    }

    return { removeMessage };
  },
};
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
