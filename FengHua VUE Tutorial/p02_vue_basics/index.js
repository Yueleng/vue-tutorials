const app = Vue.createApp({
  data() {
    return {
      name: "同学",
      link: "https://zxuqian.cn/",
      todos: [
        { content: "出去逛超市", isComplete: true },
        { content: "回来休息", isComplete: false },
        { content: "看书俩小时", isComplete: false },
      ],
      books: [
        "Improve Your Conversations",
        "Thinking, Fast and Slow",
        "The Intelligent Investor: The Definitive Book on Value Investing",
      ],
    };
  },
});
app.mount("#app");
