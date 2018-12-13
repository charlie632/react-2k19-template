import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import resolvers from "./graphql/local/resolvers";
import { CONNECTION_URI } from "./config";
import MainRouter from "./utils/MainRouter";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: CONNECTION_URI,
  cache,
  clientState: {
    defaults: {
      helloWorld: {
        __typename: "HelloWorld",
        message: "Hello everyone!"
      }
    },
    resolvers: resolvers
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <MainRouter />
  </ApolloProvider>
);

export default App;
