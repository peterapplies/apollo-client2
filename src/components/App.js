import React, { Component } from "react";
import Header from "./Header";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";

// Typography
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto"].join(",")
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Typography>
          <div className="center w85">
            <Header />
            <div className="ph3 pv1 background-gray">
              <CreateLink />
              <LinkList />
            </div>
          </div>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default App;
