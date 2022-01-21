<template>
  <router-view @search-="search_" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "Search",
  props: {
    placeholder: String,
  },
  methods: {
    search_(search_text_) {
      console.log(`This is search text-1 ${search_text_}`);
      this.$emit("search-", search_text_);
      console.log(`this is placeholder 2 ${this.placeholder}`);
    },
  },
};
</script>

