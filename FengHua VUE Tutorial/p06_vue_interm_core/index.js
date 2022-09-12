// 示例：v-html：在模板中输出原始的 HTML 代码
const app = Vue.createApp({
  data() {
    return {
      content: `<p>这是一段<span style="color: hsl(0, 80%, 70%);">HTML</span>代码</p>`,
      list: [],
      dynamic: {
        attr: "placeholder",
        value: "请输入一些字符",
        event: "change",
        dataValue: "",
      },
      blogPost: {
        title: "Vue 3.x 完全指南",
        author: "张旭乾",
        pubDate: "2021-12-12",
      },
      todos: [
        {
          id: 1,
          content: "待办1",
        },
        {
          id: 2,
          content: "待办2",
        },
        {
          id: 3,
          content: "待办3",
        },
      ],
      show: true,
      comments: ["好", "非常好", "赞"],
      comment: "",
      username: "",
      year: 2000,
      msg: "你好！",
      name: "张三",
      posts: [],
    };
  },
  computed: {
    greetings() {
      return `${this.msg} ${this.name}`;
    },
  },
  methods: {
    handleChange() {
      console.log("input 变化: ", this.dynamic.dataValue);
    },

    handleClick(id, e) {
      alert(id + ", " + e.clientX + ", " + e.clientY);
    },
    showContent(content) {
      alert(content);
    },

    handleUlClick() {
      alert("handleUlClick");
    },
    handleLiClick() {
      alert("handleLiClick");
    },
    addComment() {
      this.comments.push(this.comment);
      this.comment = "";
    },

    changeName(name) {
      this.name = name;
    },

    async fetchPosts() {
      const res = await fetch("./posts.json");
      const postsData = await res.json();
      this.posts = postsData;
    },
  },
  created() {
    this.fetchPosts();
  },
  watch: {
    name(newName) {
      console.log("watch 监听：" + newName);
    },
  },
});
const vm = app.mount("#app");
