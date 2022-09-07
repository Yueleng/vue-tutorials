const app = Vue.createApp({
  data() {
    return {
      showAnswer: true,
    };
  },
  computed: {
    label() {
      return this.showAnswer ? "Hide" : "Show";
    },
  },
});
app.mount("#app");
