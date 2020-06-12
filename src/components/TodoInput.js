import React, { Component } from 'react'

class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem, hidden} = this.props

    return (
      <div hidden={hidden}>
        <h3 className="text-center">Todo Input</h3>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book"></i>
                </div>
              </div>

              <input type="text" className="form-control" placeholder="Add an item" value={item} onChange={handleChange}></input>
            </div>

            <button type="submit" className= { editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
              { editItem ? "Edit Item" : "Add Item"}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoInput
