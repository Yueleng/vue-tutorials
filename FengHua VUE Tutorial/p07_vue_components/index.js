// 示例：局部注册组件
import ComponentA from "./components/ComponentA.js";
import ComponentC from "./components/ComponentC.js";

const app = Vue.createApp({
  components: {
    ComponentA, // 等价于 ComponentA: ComponentA
    ComponentC,
  },
});

// 示例：如何创建及注册组件
app.component("WordCount", {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
  template: `
    <div>
      <input v-model="content" />
      <p>你共输入了 {{ count }} 个字符</p>
    </div>
  `,
});

app.component("WordCountApp", {
  template: `<div>
    <h1>字符统计应用</h1>
    <WordCount />
    <WordCount />
    <WordCount />
  </div>`,
});

const vm = app.mount("#app");
