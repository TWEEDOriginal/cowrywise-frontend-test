<template>
  <div class="container">
    <div class="base_component">
      <div class="search_component">
        <Search @search-="search_" :placeholder="placeholder" />
      </div>
      <div class="images_component">
        <ImageList @show-modal="show_modal" :images="images" />
      </div>
    </div>

    <ImageDetail
      v-if="open"
      :image="image"
      @close_modal="close_modal"
      :open="open"
    />
  </div>
</template>

<script>
import Search from "../components/Search";
import ImageList from "../components/ImageList";
import ImageDetail from "../components/ImageDetail";

export default {
  name: "Layout",
  components: {
    Search,
    ImageList,
    ImageDetail,
  },
  props: {
    images: Array,
    placeholder: String,
  },
  data() {
    return {
      image: {},
      open: false,
    };
  },
  methods: {
    show_modal(image) {
      console.log(image);
      this.image = image;
      this.open = true;
      console.log("opening modal");
    },
    close_modal() {
      this.open = false;
      console.log("closing modal");
    },
    search_(search_text_) {
      console.log(`This is search text 0 ${search_text_}`);
      console.log(`this is placeholder ${this.placeholder}`);
      this.$emit("search-", search_text_);
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
}
.base_component {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(20, 1fr);
  grid-auto-columns: 1fr;
}
.search_component {
  background: #dde2e9;
  grid-row: 1/7;
  grid-column: 1/2;
}
.images_component {
  background: transparent;
  grid-row: 6/21;
  grid-column: 1/2;
}
</style>
