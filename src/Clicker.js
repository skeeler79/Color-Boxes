import React, { Component } from "react";
import Box from './Box';
import './Clicker.css'


class Clicker extends Component {
    static defaultProps = {
        numboxes: 18
    }
  render() {
const boxes = Array.from({length: this.props.numboxes}).map(
    ()=> <Box />
)

    return <div className="Clicker">{boxes}</div>;
  }
}

export default Clicker;
