<template>
  <p><Text>Some Text for slot</Text></p>
  <p>
    <Text>
      <div>Some Text for slot again</div>
    </Text>
  </p>
</template>
<script>
import Text from "./Text.vue";
export default {
  components: {
    Text,
  },
};
</script>
<style scoped>
p {
  background-color: hsl(250deg, 100%, 62%);
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 20px;
}

.text {
  color: hsl(50deg, 100%, 50%);
}

.text :deep(a) {
  display: block;
  text-decoration: none;
  color: hsl(0deg, 80%, 70%);
}
</style>
