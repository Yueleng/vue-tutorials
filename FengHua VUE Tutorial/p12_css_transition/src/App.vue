<template>
  <main>
    <div class="container">
      <button @click="show = !show">
        {{ show ? "Hide" : "Show" }}
      </button>
      <Transition name="fadeAndScale">
        <div v-if="show" :class="animationClasses"></div>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const show = ref(false);

const animationClasses = ref(["box"]);

watchEffect(() => {
  if (show.value) {
    animationClasses.value = ["box", "box-enter-active", "box-enter-from"];
    setTimeout(() => {
      animationClasses.value.push("box-enter-to");
    });
  } else {
    animationClasses.value = ["box", "box-leave-active", "box-leave-from"];
    setTimeout(() => {
      animationClasses.value.push("box-leave-to");
    });
  }
});
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
  background: linear-gradient(
    45deg,
    hsl(240deg, 60%, 50%),
    hsl(300deg, 90%, 50%)
  );
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
}

.fadeAndScale-enter-from {
  opacity: 0;
}

.fadeAndScale-enter-to {
  opacity: 1;
}

.fadeAndScale-enter-active {
  animation: scale 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
}

.fadeAndScale-leave-from {
  opacity: 1;
}

.fadeAndScale-leave-to {
  opacity: 0;
}

.fadeAndScale-leave-active {
  animation: scale 0.3s ease-in reverse;
  transition: all 0.3s ease-in;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }

  33% {
    transform: scale(1.1);
  }

  66% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}
</style>
