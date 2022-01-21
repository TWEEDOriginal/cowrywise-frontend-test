<template>
  <div>
    {{ placeholder }} <span>“{{ search_text_ }}”</span>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    search_text_: String,
    placeholder : {
    type: String,
      default:"Searching for"
    },
  },
  
  created() {
    console.log(`search prop ${this.search_text_}`);
    this.$emit("search-", this.search_text_);
  },
};
</script>

<style scoped>
div {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  top: var(--positive_center);
  transform: translateY(var(--negative_center));
  margin-left: 160px;
  color: #1d3557;
  font-size: 35px;
  line-height: 135%;
  font-weight: bold;
}
div > span {
    color: #6c757d;
}
@media screen and (max-width: 500px) {
  div {
    margin-left: var(--small_padding);
    font-size: 25px;
  }
}
</style>
