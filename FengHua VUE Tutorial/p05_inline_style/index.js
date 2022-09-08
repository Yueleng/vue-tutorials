const app = Vue.createApp({
  data() {
    return {
      fontSize: 16,
      textClass: "text-blue",
      dangerClass: "danger",
      isHidden: false,
    };
  },
  computed: {
    pStyle() {
      return {
        color: "white",
        fontSize: `${this.fontSize}px`,
      };
    },
  },
  methods: {
    increaseFontSize() {
      this.fontSize += 1;
    },
    decreaseFontSize() {
      this.fontSize -= 1;
    },
  },
});

app.mount("#app");
