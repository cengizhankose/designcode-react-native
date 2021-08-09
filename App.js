import React from 'react'
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from './navigator/AppNavigator';
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/9vbfges3gy9u",
  credentials: "same-origin",
  headers: { Authorization: `Bearer KH-pt-ZPMMp4S5LMpQ9mE_Ed-SxqBFax-eSSsXfZlkQ` }
});

const initialState = {
  action: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <ApolloProvider client={client} >
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  )
}

export default App
