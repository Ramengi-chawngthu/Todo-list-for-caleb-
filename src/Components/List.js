import React from "react";
import "./List.css";
import Radio from "./radio";
class List extends React.Component {
  handleDelete = (e) => {
    e.target.parentNode.remove();
  };

  render() {
    return this.props.list.map((list) => {
      return (
        <div className="list" key={list.id}>
          <button onClick={this.handleDelete}>Delete</button>
          <nav>{list.text}</nav>
          <Radio />
        </div>
      );
    });
  }
}

export default List;
