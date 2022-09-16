const PaginationMixin = {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    // Will be executed both in PaginationComponent and PaginationComponent2
    console.log("Execute mixin in mounted");
  },
};

export default PaginationMixin;
