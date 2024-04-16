import { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function LogIn() {
  const [signInFormData, setSignInFormData] = useState({
    signInEmail: "",
    signInPassword: "",
  });

  // const [login, { error }] = useMutation(LOGIN_USER);

  const [signUpFormData, setSignUpFormData] = useState({
    signUpEmail: "",
    signUpPassword: "",
    username: "",
  });

  // const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleSignInChange = (event) => {
    const { name, value } = event.target;
    setSignInFormData({ ...signInFormData, [name]: value });
  };

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    console.log("Sign In Form Data:", signInFormData);
    try {
      const { data } = await login({
        variables: { ...signInFormData },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setSignInFormData({
      signInEmail: "",
      signInPassword: "",
    });
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    console.log("Sign Up Form Data:", signUpFormData);
    try {
      const { data } = await addUser({
        variables: { ...signUpFormData },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }

    setSignUpFormData({
      signUpEmail: "",
      signUpPassword: "",
      username: "",
    });
  };

  return (
    <div className="signin-signup-container">
      <form className="signin-form" onSubmit={handleSignInSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="signInEmail"
          placeholder="Email"
          value={signInFormData.signInEmail}
          onChange={handleSignInChange}
          required
        />
        <input
          type="password"
          name="signInPassword"
          placeholder="Password"
          value={signInFormData.signInPassword}
          onChange={handleSignInChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      <form className="signup-form" onSubmit={handleSignUpSubmit}>
        <h2>Sign Up</h2>
        <input
          type="username"
          name="signUpUsername"
          placeholder="Username"
          value={signUpFormData.username}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="email"
          name="signUpEmail"
          placeholder="Email"
          value={signUpFormData.signUpEmail}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="password"
          name="signUpPassword"
          placeholder="Password"
          value={signUpFormData.signUpPassword}
          onChange={handleSignUpChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default LogIn;
