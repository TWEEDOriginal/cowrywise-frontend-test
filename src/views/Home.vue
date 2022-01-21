<template>
  <div class="search_base">
    <form @submit="onSubmit" class="search-photo">
      <button><i class="fas fa-search"></i></button>
      <input v-model="search_text" placeholder="Search for photo" type="text" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search_text: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.search_text) {
        alert("Please input valid text");
        return;
      }
      const search_text_ = this.search_text.trim();
      console.log(search_text_);
      console.log(`/search/${search_text_}`);
      this.$router.push(`/search/${search_text_}`);

      console.log(this.search_text);
      this.search_text = "";
    },
  },
  created() {
    this.$emit("search-", "African");
  },
};
</script>

<style>

.search_base {
  width: var(--full_dimensions);
  height: var(--full_dimensions);
  display: flex;
  justify-content: var(--center);
  align-items: var(--center);
}
.search-photo {
  height: 27%;
  width: 80%;
  background: var(--white);
  border-radius: 6px;
}
.search-photo input {
  width: 100%;
  height: 100%;
  border: none;
  background: var(--inherit);
  box-shadow: none;
  cursor: var(--cursor);
  color: #1d3557;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 121.43%;
  border-radius: 6px;
  box-sizing: border-box;
  padding: var(--smaller_padding) var(--small_padding);
  padding-left: 60px;
}
.search-photo > button {
  position: absolute;
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
.fa-search {
  color: grey;
}
</style>
