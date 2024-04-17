import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import { SmallContainer } from "./SignUp";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState({
    signUpEmail: "",
    signUpPassword: "",
    signUpUsername: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
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
    <>
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
      <SmallContainer>
        <h2>
          Already have an account? <a href="/"> Login! </a>
        </h2>
      </SmallContainer>
    </>
  );
}

export default SignUp;
