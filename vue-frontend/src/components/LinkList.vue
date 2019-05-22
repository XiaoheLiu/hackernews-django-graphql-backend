<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <link-item v-for="link in links" :key="link.id" :link="link"></link-item>
  </div>
</template>

<script>
import { ALL_LINKS_QUERY } from "../constants/graphql";
import LinkItem from "./LinkItem";

export default {
  name: "LinkList",
  data() {
    return {
      links: [],
      loading: 0
    };
  },
  components: {
    LinkItem
  },
  apollo: {
    links: {
      query: ALL_LINKS_QUERY
    }
  }
};
</script>
