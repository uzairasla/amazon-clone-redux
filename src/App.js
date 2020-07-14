import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
