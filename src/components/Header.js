import React, { Component } from "react";

class Header extends Component {
  render() {
    const { handleComplete, completed } = this.props;

    return (
      <div className="jumbotron text-center bg-dark">
        <h1 className="text-light">Your Todo Is</h1>

        <div className="my-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleComplete}
              hidden={!completed}
            >
              Complete
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleComplete}
              hidden={completed}
            >
              Inomplete
            </button>
        </div>
      </div>
    );
  }
}

export default Header;
