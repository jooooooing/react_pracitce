import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return <div className="App">
      Hello, React!
      <Subject></Subject>
      <TOC></TOC>
      </div>;
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.CSS">CSS</a></li>
        
      </nav>
    )
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>web</h1>
        <h2>world wide web</h2>
      </header>
    );
  }
}
export default App;
