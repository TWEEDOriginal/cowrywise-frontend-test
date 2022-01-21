<template>
  <div class="list-base" ref="list_base">
    <ImageCard
      @show-modal="$emit('show-modal', image)"
      v-for="image in images"
      :image="image"
      :key="image.id"
    ></ImageCard>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import ImageCard from "./ImageCard";

export default {
  name: "ImageList",
  components: {
    ImageCard,
  },
  props: {
    images: Array,
  },
  emits: ["show-modal"],

  mounted: function () {
    const grid = this.$refs.list_base;
    const msnry = new Masonry(grid, {
      // options...
      columnWidth: ".image-card",
      itemSelector: ".image-card",
      percentPosition: true,
      gutter: 55,
    });
    const imageload = new imagesLoaded(grid, function (instance) {
      console.log("all images are loaded");
      const msnry = new Masonry(grid, {
        // options...
        columnWidth: ".image-card",
        itemSelector: ".image-card",
        percentPosition: true,
        gutter: 55,
      });
    });
  },
};
</script>

<style>
.list-base {
  width: 80%;
  min-height: 100%;
  margin: auto;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 60px;
  padding-right: 120px;
}

@media screen and (max-width: 700px) {
  .list-base {
    padding-right: 60px;
  }
}
@media screen and (max-width: 500px) {
  .list-base {
    padding: 0;
  }
}
</style>
