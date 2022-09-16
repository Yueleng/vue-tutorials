<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      <slot :contact="contact"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@domain.com",
        },
        {
          id: 2,
          name: "Nancy Pelosi",
          email: "nancy.pelosi@us.gov.com",
        },
        {
          id: 3,
          name: "Donald Trump",
          email: "donald.j.trump@trumpmedium.com",
        },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
ul li {
  padding: 1em 0;
}
</style>
