import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/service" component={() => <div>service</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
