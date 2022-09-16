<template>
  <main>
    <div class="container">
      <Pagination :totalPage="totalPage" :defaultCurrentPage="currentPage" />
      <button @click="totalPage += 1">Add Page</button>
      <ButtonWithEmits @buttonClick="handleClick" />
      <ButtonWithProps :buttonClick="handleClick2" />
      <MovieCard />
      <div>
        <ContactList v-slot:default="props">
          <p>{{ props.contact.name }}</p>
          <p>{{ props.contact.email }}</p>
        </ContactList>
        <hr />
        <ContactList v-slot:default="{ contact }">
          <p>{{ contact.name }}</p>
          <p>{{ contact.email }}</p>
        </ContactList>
        <hr />
        <ContactList>
          <template v-slot:default="{ contact }">
            <p>{{ contact.name }}</p>
            <p>{{ contact.email }}</p>
          </template>
        </ContactList>
        <hr />
        <p class="gloabl-p">
          This is App.vue style, with global scope, and will affact the whole
        </p>
        <hr />
        <ScopedBox />
        <hr />
        <SassBox />
        <hr />
        <CssModuleBox />
        <hr />
        <div>
          <Paragraph />
        </div>
        <hr />
        <div class="box"></div>
        <div class="control">
          <input type="range" min="0" max="360" v-model="degree" />
        </div>
        <p>Current Angle: {{ degree }}</p>
        <hr />
        <div>
          <SearchInput v-model="searchTerm" />
          <p>{{ searchTerm }}</p>
        </div>
        <hr />
        <div>
          <!-- v-model should be followed with prop name received by child component, e.g. searchTerm -->
          <SearchInputMulti
            v-model:searchTerm="searchTermMulti"
            v-model:category="category"
          />
          <div class="splitLine"></div>
          <p>Search Term: {{ searchTermMulti }}</p>
          <p>Category: {{ category }}</p>
        </div>
        <hr />
        <div>
          <AutoFocus ref="autofocus" />
        </div>
        <hr />
        <div>
          <!-- <p v-fsize="18">这是一个段落</p> -->
          <!-- <p v-fsize="fontSize">这是一个段落</p> -->
          <p v-fsize:[unit]="fontSize">This is a paragraph</p>
          <button class="btn increase" @click="fontSize += 1">A</button>
          <button class="btn decrease" @click="fontSize -= 1">a</button>
        </div>
        <hr />
        <div>
          <TextHeading level="1">一级标题</TextHeading>
          <TextHeading level="2">二级标题</TextHeading>
          <TextHeading level="3">三级标题</TextHeading>
          <TextHeading level="4">四级标题</TextHeading>
          <TextHeading level="5">五级标题</TextHeading>
          <TextHeading level="6">六级标题</TextHeading>
        </div>
        <hr />
        <div>
          <KeepAlive>
            <Component :is="currentForm" />
          </KeepAlive>
          <div class="buttons">
            <button
              v-if="currentForm === 'RegisterForm'"
              @click="currentForm = 'ProfileForm'"
            >
              下一步
            </button>
            <template v-else-if="currentForm === 'ProfileForm'">
              <button @click="currentForm = 'RegisterForm'">上一步</button>
              <button>完成</button>
            </template>
          </div>
        </div>
        <hr />
        <button @click="msgs.push(`This is message #${msgs.length + 1}`)">
          Add Message
        </button>
        <AlertBox v-for="msg in msgs">{{ msg }}</AlertBox>
        <hr />
        <BaseCard title="Title of the Card">Content of the Card</BaseCard>
        <hr />
        <PaginationComponent
          :totalPage="totalPage"
          :defaultCurrentPage="currentPage"
        />
        <PaginationComponent2
          :totalPage="totalPage"
          :defaultCurrentPage="currentPage"
          showTotal="true"
        />
        <hr />
        <h1>
          {{ siteTitle }}
        </h1>
        <GPaginationComponent
          :totalPage="totalPage"
          :defaultCurrentPage="currentPage"
        />
        <GPaginationComponent2
          :totalPage="totalPage"
          :defaultCurrentPage="currentPage"
        />
        <BaseButton :defaultCurrentPage="currentPage" />
        <hr />
        <nav>
          <a href="#" @click.prevent="currentNav = 'HomePage'">Home Page</a>
          <a href="#" @click.prevent="currentNav = 'ProductPage'"
            >Product Page</a
          >
        </nav>
        <component :is="currentNav" />
        <hr />
        <AppList :data="data" />
        <hr />
        <div>
          <p v-if="error">This is the error in the Root Component</p>
          <!-- <AppList v-else :data="data" /> -->
          <template v-else>
            <AppListLocal :data="data" />
            <AppButton>Test Button</AppButton>
          </template>
        </div>
        <hr />
      </div>
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";

import Pagination from "./components/Pagination.vue";
import ButtonWithEmits from "./components/ButtonWithEmits.vue";
import ButtonWithProps from "./components/ButtonWithProps.vue";
import MovieCard from "./components/MovieCard.vue";
import ContactList from "./components/ContactList.vue";
import ScopedBox from "./components/ScopedBox.vue";
import SassBox from "./components/SassBox.vue";
import CssModuleBox from "./components/CssModuleBox.vue";
import Paragraph from "./components/Paragraph.vue";
import SearchInput from "./components/SearchInput.vue";
import SearchInputMulti from "./components/SearchInputMulti.vue";
import AutoFocus from "./components/AutoFocus.vue";
import TextHeading from "./components/TextHeading.vue";
import RegisterForm from "./components/RegisterForm.vue";
import ProfileForm from "./components/ProfileForm.vue";
import AlertBox from "./components/AlertBox.vue";
import BaseCard from "./components/BaseCard.vue";
import PaginationComponent from "./components/Mixins/PaginationComponent.vue";
import PaginationComponent2 from "./components/Mixins/PaginationComponent2.vue";
import BaseButton from "./components/GlobalMixins/BaseButton.vue";
import GPaginationComponent from "./components/GlobalMixins/PaginationComponent.vue";
import GPaginationComponent2 from "./components/GlobalMixins/PaginationComponent2.vue";
import HomePage from "./components/Async/HomePage.vue";
const ProductPage = defineAsyncComponent(() =>
  import("./components/Async/ProductPage.vue")
);
import AppList from "./components/ErrorHandling/AppList.vue";
import AppButton from "./components/ErrorHandlingLocal/AppButton.vue";
import AppListLocal from "./components/ErrorHandlingLocal/AppList.vue";

export default {
  components: {
    Pagination,
    ButtonWithEmits,
    ButtonWithProps,
    MovieCard,
    ContactList,
    ScopedBox,
    SassBox,
    CssModuleBox,
    Paragraph,
    SearchInput,
    SearchInputMulti,
    AutoFocus,
    TextHeading,
    RegisterForm,
    ProfileForm,
    AlertBox,
    BaseCard,
    PaginationComponent,
    PaginationComponent2,
    BaseButton,
    GPaginationComponent,
    GPaginationComponent2,
    HomePage,
    ProductPage,
    AppList,
    AppButton,
    AppListLocal,
  },
  methods: {
    handleClick(value) {
      alert(value);
    },
    handleClick2(value) {
      alert(value);
    },
  },
  data() {
    return {
      totalPage: 6,
      currentPage: 4,
      degree: 0,
      searchTerm: "",
      searchTermMulti: "",
      category: "",
      fontSize: 6,
      unit: "em",
      currentForm: "RegisterForm",
      msgs: [],
      currentNav: "HomePage",
      data: [1, 2, 3],
      error: false,
    };
  },
  errorCaptured() {
    this.error = true;
    return false; // stop pass to upper layer.
  },
  computed: {
    degreeStr() {
      return this.degree + "deg";
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$refs.autofocus.inputText);
      this.$refs.autofocus.blur();
    }, 3000);
  },
};
</script>

<style>
.box {
  width: 250px;
  height: 250px;
  border-radius: 8px;
  background-color: hsl(280deg, 100%, 60%);
  box-shadow: 0 0 24px hsl(280deg, 100%, 70%, 0.5);
  /* transform: rotate(v-bind(degree + "deg")); */
  transform: rotate(v-bind(degreeStr));
}

#messages {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
}

nav {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 24px;
}

nav a {
  color: hsl(280deg, 50%, 70%);
  text-decoration: none;
}
</style>
