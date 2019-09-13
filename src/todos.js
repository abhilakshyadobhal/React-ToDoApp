import React from "react";

export const ToDos = ({ activities, deleteActivity }) => {
  console.log(activities);
  const activityList = activities.length ? (
    activities.map(activity => {
      return (
        <div className="section" key={activity.id}>
          <h6
            onClick={() => {
              deleteActivity(activity.id);
            }}
          >
            {activity.name}
          </h6>
          <br />
          <div className="divider"></div>
        </div>
      );
    })
  ) : (
    <h5 className="center section">
      <b className="section">
        You have no activity for doing today. <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">&#128526;</span>
      </b>
    </h5>
  );
  return <div className="activities">{activityList}</div>;
};
