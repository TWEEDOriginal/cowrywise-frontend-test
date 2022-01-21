<template>
  <Layout :images="images" @search-="search_" :placeholder="placeholder" />
</template>

<script>
import axios from "axios";
import Layout from "./containers/Layout";

export default {
  name: "App",
  components: {
    Layout,
  },
  data() {
    return {
      images: [],
      placeholder: "Searching for"
    };
  },
  methods: {
    async fetchImages(query) {
      const access_key = process.env.VUE_APP_ACCESS_KEY;
      return await axios
        .get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: access_key,
            query: query,
            per_page: 8,
            order_by: "latest",
          },
        })
        .then((res) => {
          const results = res.data.results.map((image) => {
            return {
              id: image.id,
              urls_full: image.urls.full,
              urls_regular: image.urls.regular,
              user_name: image.user.name,
              user_location: image.user.location,
            };
          });
          return results;
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
    },
    async search_(search_text_) {
      console.log("searchinggg");
      console.log(`This is search text ${search_text_}`);
      console.log(this.images);
      this.images = await this.fetchImages(search_text_);
      console.log(this.images);
      this.placeholder = "Search results for"
    },
  },
};
</script>

<style>
:root {
  --full_dimensions: 100%;
  --white: #ffffff;
  --center: center;
  --cursor: pointer;
  --inherit: inherit;
  --small_padding: 20px;
  --smaller_padding: 10px;
  --negative_center: -50%;
  --positive_center:50%;
}
* {
  margin: 0;
  padding: 0;
}
html {
  height: var(--full_dimensions);
}
body {
  height: var(--full_dimensions);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: var(--full_dimensions);
  height: var(--full_dimensions);
}
</style>
