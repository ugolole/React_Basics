import React, { Component } from "react";

// Create a counter class that extends the component class
// The component class contains a set of methods that are needed by the Counter class.
class Counter extends Component {
  state = {
    count: 0,
    image: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  imageStyle = {
    borderRadius: 30,
  };
  
  render() {
    return (
      <div>
        <img style={this.imageStyle} src={this.state.image} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state; // this is a destructor object used to make code easier to understand.
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
