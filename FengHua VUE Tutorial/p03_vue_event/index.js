const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
      countDown: 5,
      timer: null,
      blogPosts: [
        "Learn Vue",
        "Vue from Beginner to Expert",
        "Learn React",
        "React from Beginner to Expert",
      ],
      blogPosts2: [
        "Learn Vue",
        "Vue from Beginner to Expert",
        "Learn React",
        "React from Beginner to Expert",
      ],
      count: 4,
      newBlog: "",
    };
  },
  computed: {
    label() {
      return this.showAnswer
        ? "Hide Answer in " + this.countDown
        : "Show Answer";
    },
    vueBlog() {
      console.log("computed is called");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
    counter() {
      return this.vueBlog.length;
    },
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    getVueBlog(_count) {
      console.log("method is called");
      return this.blogPosts
        .filter((blog) => blog.includes("Vue"))
        .slice(0, _count);
    },
    addAfterTwoSeconds() {
      setTimeout(() => {
        this.blogPosts2.push("Advanced Vue");
      }, 2000);
    },
  },
  watch: {
    showAnswer(newVal, oldVal) {
      if (newVal) {
        this.countDown = 5;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    // blogPosts2: {
    //   handler(newVal) {
    //     this.count = newVal.length;
    //   },
    //   deep: true,
    // },
    newBlog(newVal) {
      setTimeout(() => {
        this.blogPosts2.push(newVal);
      }, 2000);
    },
  },
});
app.mount("#app");
