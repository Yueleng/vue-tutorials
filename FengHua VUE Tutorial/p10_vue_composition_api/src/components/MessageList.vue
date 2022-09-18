<template>
  <div>
    <h2>{{ options.title }}</h2>
    <p>
      user: {{ options.user.name }}, active:
      {{ options.user.active ? "yes" : "no" }}
    </p>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="messages = []">Click to delete</button>
    <button @click="options.title = 'This is updated title'">
      Update Title
    </button>
    <button @click="options.user.name = 'George'">Update Name</button>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const messages = ref([
      { id: 1, content: "This is message 1" },
      { id: 2, content: "This is message 2" },
      { id: 3, content: "This is message 3" },
      { id: 4, content: "This is message 4" },
    ]);

    console.log(messages.value);

    const options = reactive({
      title: "Message List",
      user: {
        name: "Jack",
        active: true,
      },
    });

    console.log(options);

    return { messages, options };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
}

h2 {
  color: hsl(280deg, 100%, 70%);
  margin-bottom: 24px;
  text-align: center;
}

ul {
  list-style: none;
  display: grid;
  gap: 24px;
}

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

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  border-radius: 4px;
  color: white;
}
</style>
