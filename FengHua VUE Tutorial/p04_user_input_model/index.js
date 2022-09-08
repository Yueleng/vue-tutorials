// 示例：表单输入控件事件处理
const app = Vue.createApp({
  data() {
    return {
      username: "",
      username2: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },

  methods: {
    handleInput(e) {
      //   console.log(e.target.value);
      this.username = e.target.value;
    },
    resetUserName() {
      this.username = "";
    },
    resetUserName2() {
      this.username2 = "";
    },
    handleSubmit() {
      console.log(this.intro);
    },
  },
});
app.mount("#app");
