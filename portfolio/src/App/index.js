import React, { Component } from "react";
import "./style.css";
// import Bio from "../Components/Bio"
// import Projects from "../Components/Projects"
import Home from "../Components/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Bio />
      <Projects /> */}
      <Home />
      </div>
    )
  }
}

export default App;
