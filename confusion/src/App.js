import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
