import React from "react";
import Header from "./Header";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";

// Import the wrapper component, and the the creator function
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Create a new theme using Spartan
const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto, sans-serif"
  }
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <CreateLink />
      <LinkList />
    </MuiThemeProvider>
  );
}
