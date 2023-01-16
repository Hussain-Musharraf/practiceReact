import React from "react";
import { render } from "react-dom";
import "./index.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  render() {
    const incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };
    const decrementCounter = () => {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1
        });
      }
    };
    return (
      <div>
        <h1 className="changeColor">{this.state.counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    );
  }
}
export default App;
