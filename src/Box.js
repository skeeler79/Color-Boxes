import React, { Component } from "react";
import "./Box.css";
import { randomizer } from "./helpers";

class Box extends Component {
  static defaultProps = {
    colors: [
      "#7d33ff",
      "#712ee6",
      "#6429cc",
      "#5824b3",
      "#4b1f99",
      "#8a47ff",
      "#975cff",
      "#a470ff",
      "#b185ff",
      "#be99ff",
      "#cbadff",
      "#d8c2ff",
      "#e5d6ff",
      "#f2ebff",
    ],
  };

  constructor(props) {
    super(props);
    this.state = { color: "#7d33ff" };
    this.handleClick = this.handleClick.bind(this);
  }

  randomColor() {
    let newColor =
      randomizer(this.props.colors);
      

    this.setState((st) => {
      return {
        color: newColor,
      };
    });
  }

  handleClick() {
    this.randomColor();
  }

  render() {
    return (
      <div
        className="Box"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Box;
