export function ActivityLog(/* goal, activity  */) {
  return (
    <>
      <div className="activityLogMain">
        <h2> Goal: User's Goal Here {/* goal.goalTitle */} </h2>
        <div>
          {/* TODO: add flex properties so these are displayed 'space between' */}
          <div className="flexSpaceBetween">
            <h3>Activity Log</h3>
            <button className="newActivityButton"> Add New Activity </button>
          </div>
          <div>
            {/* TODO: create a map function that will reiterate every activity that the user has done  */}
            <ul>
              <li> Date | Progress log 1 towards goal 1 </li>
              <li> Date | Progress log 2 towards goal 1 </li>
              <li> Date | Progress log 3 towards goal 1 </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityLog;
