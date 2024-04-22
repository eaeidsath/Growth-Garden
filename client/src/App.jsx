import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./assets/Global.style";
import Messaging from "./components/Messaging/Messaging";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const Main = styled.main`
  flex: 1;
`;

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Header />

        <Outlet />
        <Messaging />

        <Footer />
      </ApolloProvider>
    </>
  );
}
