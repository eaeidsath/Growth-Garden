import { useState } from "react";
import { ADD_ACTIVITY } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

import { useParams, Link } from "react-router-dom";

//in order to make sure the user is logged in before adding an activity, use Auth 
import Auth from "../../utils/auth";

function NewActivityForm() {
  //define state for the activity variable 
  const [activity, setActivity] = useState("");
  //call the ADD_ACTIVITY mutation using useMutation hook
  const [addActivity, { error }] = useMutation(ADD_ACTIVITY);

  //get the goalId from the url and name it 
  const { goalId } = useParams();

  //on submit, send data to the database 
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prevent submitting empty activity
    if (!activity.trim()) return;

    try {
      const data = await addActivity({
        variables: { goalId: goalId, activityText: activity },
      });
      setActivity(""); // Clear input after submitting
    } catch (e) {
      console.error(e);
    }
  };

  //react code for form functionality 
  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <form onSubmit={handleSubmit}>
          <label>
            New Activity:
            <input
              type="text"
              value={activity}
              onChange={handleChange}
              placeholder="Enter your new activity"
            />
            <br />
          </label>
          <button type="submit">Add Activity</button>
        </form>
      ) : (
        <p>
          {" "}
          You need to be logged in to log an activity. Please
          <Link to="/"> login</Link> or
          <Link to="/signup"> signup.</Link>
        </p>
      )}
    </>
  );
}

export default NewActivityForm;
