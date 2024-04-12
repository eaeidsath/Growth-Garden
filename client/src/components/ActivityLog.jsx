
export function ActivityLog() {
  return (
    <>
      <div className="activityLogMain">
        {/* TODO: Add dynamic JS variable here (refer to models) */}
        <h2> Goal:  </h2>
        <div>
            {/* TODO: add flex properties so these are displayed 'space between' */}
            <h3>Activity Log</h3>
            <button> +New Activity </button>
            <div>
                {/* TODO: add dynamic JS variable for progress towards goals (look at models) */}
                <ul>
                    <li> Progress towards goal 1 </li>
                    <li> Progress towards goal 1 </li>
                    <li> Progress towards goal 1 </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
}

export default ActivityLog;
