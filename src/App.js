import React, { Component } from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { ToDos } from "./todos";
import AddActivity from "./AddActivity";

class App extends Component {
  state = {
    activities: [{ id: 1, name: "do homework" }, { id: 2, name: "study" }]
  };

  deleteActivity = id => {
    // console.log(id);
    const activities = this.state.activities.filter(activity => {
      return activity.id !== id;
    });
    this.setState({
      activities: activities
    });
  };

  addActivity = activity => {
    activity.id = Math.random();
    let activities = [...this.state.activities, activity];
    this.setState({
      activities
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="center red-text">Todo's</h3>
        <ToDos
          activities={this.state.activities}
          deleteActivity={this.deleteActivity}
        />
        <AddActivity addActivity={this.addActivity} />
      </div>
    );
  }
}

export default App;
