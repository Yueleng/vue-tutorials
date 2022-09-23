<template>
  <main>
    <div class="container">
      <MessageList class="messageList" :test="test" data-title="Message List" />
      <button @onlick="messages.pop()">Delete One Message</button>
    </div>
    <AutoFocus />
    <BaseLayout>
      <template v-slot:header>
        <nav>
          <a href="#">Main</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </nav>
      </template>
      <template v-slot:default>
        <p>This is Content</p>
      </template>
    </BaseLayout>
    <UserTable />
  </main>
</template>

<script setup>
import { ref } from "vue";
import MessageList from "./components/MessageList.vue";
import AutoFocus from "./components/AutoFocus.vue";
import BaseLayout from "./components/BaseLayout.vue";
import UserTable from "./components/UserTable.vue";

const test = ref("test");
setTimeout(() => {
  test.value = "changed";
}, 2000);
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
  /* height: 100vh; */
  max-width: 100%;
  display: grid;
  place-items: center;
}
</style>
