<template>
  <main>
    <div class="container">
      <MessageList :messages="messages" />
      <button @onlick="messages.pop()">Delete One Message</button>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import MessageList from "./components/MessageList.vue";

export default {
  components: {
    MessageList,
  },
  setup() {
    const messages = ref([
      { id: 1, content: "This is message1" },
      { id: 1, content: "This is message2" },
      { id: 1, content: "This is message3" },
      { id: 1, content: "This is message4" },
    ]);

    // messages is of Ref type
    console.log("messages type: ", messages);

    return { messages };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}
</style>
