import React, { Component } from "react";
import "./style.css";
// import Bio from "../Components/Bio"
// import Projects from "../Components/Projects"
import Home from "../Components/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
      <p className="Erika">Erika Sequeira</p>
      <Home />
      </div>
    )
  }
}

export default App;
