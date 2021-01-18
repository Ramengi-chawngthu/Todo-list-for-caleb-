import React from "react";
import "./App.css";
import Todo from "./Components/Todo";
import List from "./Components/List";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  onNameChange = (id, text) => {
    const newTodo = { id, text };
    const newList = [...this.state.list];
    newList.push(newTodo);
    this.setState({ list: newList });
  };

  render() {
    return (
      <div className="header">
        <h1>Todo list</h1>
        <Todo list={this.state.list} onNameChange={this.onNameChange} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
