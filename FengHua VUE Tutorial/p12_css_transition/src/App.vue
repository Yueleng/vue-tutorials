<template>
  <main>
    <div class="container">
      <Transition name="fade">
        <div class="box" :class="box" :key="box"></div>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, Transition } from "vue";

const boxes = ["box1", "box2", "box3"];

const current = ref(0);

const box = computed(() => boxes[current.value]);

setInterval(() => {
  current.value = (current.value + 1) % boxes.length;
}, 1500);
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

.container {
  display: grid;
  justify-items: center;
  grid-template-rows: 70px 1fr;
  height: 300px;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
  margin-top: 64px;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 12px 18px;
  margin-bottom: 24px;
  border-radius: 4px;
  color: white;
}

.box {
  width: 100px;
  height: 100px;
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;

  grid-area: 1 / 1 / 2 / 2;
}

.box1 {
  background: linear-gradient(
    45deg,
    hsl(240deg, 60%, 50%),
    hsl(300deg, 90%, 50%)
  );
}

.box2 {
  background: linear-gradient(
    45deg,
    hsl(140deg, 60%, 50%),
    hsl(200deg, 90%, 50%)
  );
}

.box3 {
  background: linear-gradient(45deg, hsl(0deg, 60%, 50%), hsl(50deg, 90%, 50%));
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.7s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}
</style>
