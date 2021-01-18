import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo) {
      const todo = this.state.todo;
      const length = this.props.list.length;
      this.setState({ todo: "" });
      this.props.onNameChange(length, todo);
    }
  };

  render() {
    return (
      <div style={{ marginBottom: "80px" }}>
        <form onSubmit={this.onHandleSubmit}>
          <input
            name="todo"
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Todo;
