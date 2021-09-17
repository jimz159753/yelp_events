import React from "react";
import { Text, View, ScrollView } from "react-native";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Routes from "./src/Routes";

const httpLink = createHttpLink({
  uri: "https://api.yelp.com/v3/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.BEARER_TOKEN,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
