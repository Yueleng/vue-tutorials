<template>
  <div>
    <a :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: ["link", "title"],
  inheritAttrs: false,
  mounted() {
    // still there, although inheritAttrs is false
    console.log(this.$attrs.class);
  },
};
</script>
