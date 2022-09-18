<template>
  <div>
    <h2>{{ options.title }}</h2>
    <p>
      user: {{ options.user.name }}, active:
      {{ options.user.active ? "yes" : "no" }}
    </p>
    <!-- v-model can bind ref, it is the same with data -->
    <input type="text" placeholder="Search Messages" v-model="searchTerm" />
    <ul>
      <li v-for="msg in searchedMessages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="messages = []">Click to delete</button>
    <button @click="options.title = 'This is updated title'">
      Update Title
    </button>
    <button @click="options.user.name = 'George'">Update Name</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
export default {
  setup() {
    const messages = ref([
      { id: 1, content: "This is message 1" },
      { id: 2, content: "This is message 2" },
      { id: 3, content: "This is message 3" },
      { id: 4, content: "This is message 4" },
    ]);

    console.log(messages.value);

    const searchTerm = ref("");

    const searchedMessages = computed(() =>
      searchTerm.value === ""
        ? messages.value
        : messages.value.filter((msg) => msg.content.includes(searchTerm.value))
    );

    console.log("searchedMessages.value", searchedMessages.value);

    watch(searchTerm, (newVal, oldVal) => {
      console.log("Search Term: ", newVal, oldVal);
    });

    // This also works
    // watch(
    //   () => searchTerm.value,
    //   (newVal, oldVal) => {
    //     console.log("searchTerm[callback]", newVal, oldVal);
    //   }
    // );

    const options = reactive({
      title: "Message List",
      user: {
        name: "Jack",
        active: true,
      },
    });

    console.log(options);

    // level 1 Object attribute
    watch(
      () => options.title,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      }
    );

    // level 2 Object attribute
    watch(
      () => options.user.name,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      }
    );

    // The comparision is by reference,
    // won't work, same for `Array`
    // watch(
    //   () => options,
    //   (newVal, oldVal) => {
    //     console.log("Object watch");
    //     console.log(newVal, oldVal);
    //   }
    // );

    // Set deep to true, we can detect Object
    // attribute change, but the two objects are
    // the same object.
    // watch(
    //   () => options,
    //   (newVal, oldVal) => {
    //     console.log("Object watch");
    //     console.log(newVal, oldVal);
    //     console.log("Same Object: ", newVal === oldVal); // true
    //   },
    //   { deep: true }
    // );

    // Pure Cloning
    watch(
      () => JSON.parse(JSON.stringify(options)),
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
        console.log("Same Object", newVal === oldVal);
      }
    );

    return { messages, options, searchedMessages, searchTerm };
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

input,
select {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
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
