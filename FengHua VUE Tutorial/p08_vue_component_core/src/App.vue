<script>
import WordCount from "./components/WordCount.vue";
import MessageItem from "./components/MessageItem.vue";
import PropTypes from "./components/PropTypes.vue";
import TypeValidation from "./components/TypeValidation.vue";
import BlogPostItem from "./components/BlogPostItem.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseCard2 from "./components/BaseCard2.vue";
import BlogPostItemWithEvent from "./components/BlogPostItemWithEvent.vue";
export default {
  components: {
    WordCount,
    MessageItem,
    PropTypes,
    TypeValidation,
    BlogPostItem,
    BaseCard,
    BaseCard2,
    BlogPostItemWithEvent,
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          sender: "张三",
          msg: "你好呀!",
          time: "19:38",
        },
        {
          id: 2,
          sender: "李四",
          msg: "Hi!",
          time: "19:40",
        },
        {
          id: 3,
          sender: "王五",
          msg: "最近怎么样？",
          time: "19:42",
        },
      ],
      posts: [
        { id: 1, title: "Post 1", link: "https://some.url.com" },
        { id: 2, title: "Post 2", link: "https://some.url.com" },
        { id: 3, title: "Post 3", link: "https://some.url.com" },
      ],
      deletablePosts: [
        { id: 1, title: "Post 1", link: "https://some.url.com" },
        { id: 2, title: "Post 2", link: "https://some.url.com" },
        { id: 3, title: "Post 3", link: "https://some.url.com" },
      ],
    };
  },
  methods: {
    handleDeletePost(id) {
      this.deletablePosts = this.deletablePosts.filter((p) => p.id !== id);
    },
  },
};
</script>

<template>
  <main>
    <div>
      <h1>Character Count App</h1>
      <WordCount />
      <h1>Show Message Items</h1>
      <MessageItem sender="Harish" msg="Senior Manager" time="19:38" />
      <MessageItem sender="Nancy" msg="Beloved Girl" time="19:44" />
      <MessageItem sender="Xing" msg="Direct Boss" time="20:22" />
      <h1>Dynamic Props</h1>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :sender="message.sender"
        :msg="message.msg"
        :time="message.time"
      />
      <h1>V-bind Props</h1>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      />
      <h1>PropTypes</h1>
      <PropTypes
        :num="10"
        :bool="true"
        :obj="{ name: 'Sejal' }"
        :array="[1, 2, 3, 4]"
      />
      <h1>TypeValidation</h1>
      <TypeValidation name="William" :age="-20" />
      <h1>Blog Post Item</h1>
      <div>
        <BlogPostItem
          v-for="post in posts"
          :key="post.id"
          v-bind="post"
          class="blogLink"
        />
      </div>
      <h1>Card Container</h1>
      <div>
        <BaseCard title="Card Container">
          <p>This is the content of the card</p>
          <p>You can insert and HTML Template</p>
          <a href="#">This is a hyperlink</a>
        </BaseCard>
      </div>
      <h1>Card Container with named Slot</h1>
      <div>
        <BaseCard2>
          <!-- <template v-slot:title> -->
          <template #title>
            <h2>Card Title</h2>
          </template>
          <!-- <template v-slot:content> -->
          <template #content>
            <p>Content of the Card</p>
            <p>You can insert any template</p>
            <a href="#">This is a hyperlink</a>
          </template>
        </BaseCard2>
      </div>
      <div>
        <BaseCard title="Lists">
          <BlogPostItemWithEvent
            v-for="post in deletablePosts"
            :key="post.id"
            v-bind="post"
            @deletePost="handleDeletePost"
          />
        </BaseCard>
      </div>
    </div>
  </main>
</template>

<style>
.blogLink a {
  color: hsl(250deg, 50%, 60%);
}
</style>
