import React, { Component } from "react";
import "./style.css";
import Bio from "../Components/Bio"
import Projects from "../Components/Projects"

class App extends Component {
  render() {
    return (
      <div>
      <Bio />
      <Projects />
      </div>
    )
  }
}

export default App;
