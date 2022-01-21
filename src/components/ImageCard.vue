<template>
  <div @click="onClick(image)" class="image-card" ref="image_card">
    <img :src="image.urls_regular" alt="" ref="img" />
    <div class="image-details">
      <div class="image-name skeleton skeleton-text1" ref="image_name">
        {{ image.user_name }}
      </div>
      <div class="image-location skeleton skeleton-text2" ref="image_location">
        {{ image.user_location }}
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export default {
  name: "ImageCard",
  props: {
    image: Object,
  },
  methods: {
    onClick(image) {
      console.log("image clicked");
      this.$emit("show-modal", image);
    },
  },

  mounted: function () {
    const image_ = this.$refs.image_card;
    const img = this.$refs.img;
    const image_name = this.$refs.image_name;
    const image_location = this.$refs.image_location;
    const grid = document.querySelector(".list-base");

    const imageload = new imagesLoaded(image_, function (instance) {
      // console.log(img.attributes[0].value)
      if (img.attributes[0].value) {
        image_name.classList.remove("skeleton");
        image_location.classList.remove("skeleton");
        image_name.classList.remove("skeleton-text1");
        image_location.classList.remove("skeleton-text2");

        const msnry = new Masonry(grid, {
          // options...
          columnWidth: ".image-card",
          itemSelector: ".image-card",
          percentPosition: true,
          gutter: 55,
        });
      }
    });
  },
};
</script>

<style scoped>
.image-card {
  background: #f5f5f5;
  position: relative;
  width: 268px;
  min-height: 150px;
  margin-bottom: 34px;
  border-radius: var(--smaller_padding);
}
.image-details {
  position: absolute;
  bottom: 40px;
  left: var(--positive_center);
  transform: translate(var(--negative_center), var(--positive_center));
  color: var(--white);
  z-index: 3;
  width: 80%;
  font-size: 15px;
  line-height: 125%;
  font-weight: normal;
}
.skeleton {
  opacity: 0.7;
  margin-bottom: 5px;
  color: hsl(200, 20%, 70%);
  animation: skeleton-loading 1s linear infinite alternate;
}
.image-name {
  height: 20px;
}
.image-location {
  font-size: var(--smaller_padding);
  font-weight: 300;
  height: 17px;
}
.skeleton-text1 {
  width: 70%;
}
.skeleton-text2 {
  width: var(--positive_center);
}
.image-card img {
  display: block;
  position: relative;
  border-radius: var(--smaller_padding);
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
  cursor: var(--cursor);
}
.image-card:after {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  display: block;
  border-radius: var(--smaller_padding);
  content: "";
}

@keyframes skeleton-loading {
  0% {
    color: hsl(200, 20%, 70%);
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    color: hsl(200, 20%, 95%);
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
