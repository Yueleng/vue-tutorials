import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PaginationMixin from "./components/GlobalMixins/GlobalPaginationMixin";

const app = createApp(App);

// app.directive("fsize", {
//   mounted(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
//   // in this way, when data updated
//   // it triggers the update commands
//   updated(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
// });

app.directive("fsize", (el, binding) => {
  el.style.fontSize = binding.value + (binding.arg || "px");
});

app.mixin(PaginationMixin);
app.mixin({
  siteTitle: "My Vue App",
  computed: {
    siteTitle() {
      return this.$options.siteTitle;
    },
  },
});

app.mount("#app");
