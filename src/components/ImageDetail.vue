<template>
  <div class="modal-background">
    <button @click="$emit('close_modal')"><i class="fas fa-times"></i></button>
    <div class="modal">
      <div
        class="skeleton"
        :style="{ backgroundImage: 'url(' + image.urls_regular + ')' }"
        ref="background_"
      >
        <!-- Modal Bg image -->
      </div>

      <div>
        <div class="modal-name skeleton skeleton-text" ref="modal_name">
          {{ image.user_name }}
        </div>
        <div class="modal-location skeleton skeleton-text" ref="modal_location">
          {{ image.user_location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagesLoaded from "imagesloaded";

export default {
  name: "ImageDetail",
  props: {
    image: { type: Object, default: {} },
    open: Boolean,
  },
  emits: ["close_modal"],

  mounted: function () {
    const background_ = this.$refs.background_;
    console.log(background_);
    const modal_name = this.$refs.modal_name;
    const modal_location = this.$refs.modal_location;

    const backgroundload = new imagesLoaded(
      background_,
      { background: true },
      function () {
        console.log("background loaded");
        background_.classList.remove("skeleton");
        modal_name.classList.remove("skeleton");
        modal_location.classList.remove("skeleton");
        modal_name.classList.remove("skeleton-text");
        modal_location.classList.remove("skeleton-text");
      }
    );
  },
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: var(--center);
  justify-content: var(--center);
  z-index: 1000;
}
.modal {
  width: 75%;
  height: 82%;
  background-color: var(--white);
  border-radius: 15px;
}
.modal-name {
  color: #1d3557;
  font-size: 25px;
  line-height: 125%;
  font-weight: bold;
  width: 70%;
}
.modal-location {
  color: #adb5bd;
  font-size: 15px;
  line-height: 100%;
  font-weight: 600;
  width: var(--positive_center);
}
.skeleton-text {
  height: 25px;
}
.modal > div:nth-child(1) {
  width: 100%;
  height: 81.6%;
  border-radius: 15px 15px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center var(--center);
}
.modal > div:nth-child(2) {
  width: 100%;
  height: 18.4%;
  border-radius: 0 0 15px 15px;
  padding: 15px 0 0 62px;
}
.modal-background > button {
  position: absolute;
  left: 90%;
  top: 2%;
  width: var(--small_padding);
  height: var(--small_padding);
  margin: var(--small_padding) var(--small_padding);
  background: none;
  color: var(--inherit);
  border: none;
  padding: 0;
  font: var(--inherit);
  cursor: var(--cursor);
  outline: var(--inherit);
}
.fa-times {
  color: white;
}
.skeleton {
  opacity: 0.7;
  margin-bottom: 5px;
  color: hsl(200, 20%, 70%);
  animation: skeleton-loading 1s linear infinite alternate;
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

@media screen and (max-width: 700px) {
  .modal {
    height: var(--positive_center);
    width: 90%;
  }
  .modal > div:nth-child(2) {
    padding: 5px 0 0 22px;
  }
}
</style>
