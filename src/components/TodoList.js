import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, handleSort, completed } = this.props;
    const noItems = items.length === 0;

    return (
      <div hidden={noItems}>
        <ul className="list-group my-5">
          <h3 className="text-center">Todo List</h3>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              completed={completed}
            />
          ))}
          <button
            type="button"
            className="btn btn-primary btn-block mt-5"
            onClick={handleSort}
          >
            Sort Alphabetically
          </button>
          <button
            type="button"
            className="btn btn-danger btn-bloc"
            onClick={clearList}
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
