import React from "react";
import "./radio.css";

class radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
    console.log(e.target.parentNode.children[1].classList.toggle("strike"));
  };

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default radio;
