import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false,
      completed: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  handleComplete = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  handleSort = () => {
    const sortedItems = this.state.items.sort((item1, item2) =>
      item1.title.localeCompare(item2.title)
    );

    this.setState({
      items: sortedItems,
    });
  };

  render() {
    return (
      <>
        <Header
          handleComplete={this.handleComplete}
          completed={this.state.completed}
        />

        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
                hidden={this.state.completed}
              />

              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleSort={this.handleSort}
                completed={this.state.completed}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
