import React, { Component } from "react";

class AddActivity extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addActivity(this.state);
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="activity">Activity Wanna Add:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default AddActivity;
