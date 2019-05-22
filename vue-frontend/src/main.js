import Vue from "vue";
import App from "./App";
import "tachyons";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "http://127.0.0.1:8000/graphql/"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  apolloProvider: apolloProvider,
  render: h => h(App)
});
