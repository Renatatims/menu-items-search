import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import Signup from "./pages/Signup";
//import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

const httpLink = createHttpLink({
  uri: "/graphql",
});

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            {/*
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            */}
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
          
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
